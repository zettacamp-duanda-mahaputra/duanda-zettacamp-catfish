import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { FormComponent } from './form/form.component';
import { Drop } from './model/drop';
import { Dropdown } from './model/dropdown';
import { StockManagementService } from './stock-management.service';

@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.component.html',
  styleUrls: ['./stock-management.component.css'],
})
export class StockManagementComponent implements OnInit {
  dataSource = new MatTableDataSource();
  displayedColumns: any[] = ['name', 'stock', 'status', 'action'];

  statusFilter = new FormControl();
  filteredValues: any = { status: '' };
  availableSources: Dropdown[] = Drop;

  constructor(
    private stockManagementService: StockManagementService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAll();

    this.statusFilter.valueChanges.subscribe((statusFilterValue) => {
      this.filteredValues['status'] = statusFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.dataSource.filterPredicate = this.customFilterPredicate();
  }

  customFilterPredicate() {
    const myFilterPredicate = function (data: any, filter: string): any {
      console.log(data, filter);

      let searchString = JSON.parse(filter);
      let statusFound = data.status.includes(
        (searchString.status || '')
      );

      return statusFound;
    };
    return myFilterPredicate;
  }

  getAll() {
    this.stockManagementService.getAllIngredients().subscribe((data: any) => {
      this.dataSource.data = data;
      console.log(data);
    });
  }

  openDialog(data?: any): void {
    const dialogRef = this.dialog.open(FormComponent, { data: data || null });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;

      if ('_id' in result) {
        this.stockManagementService
          .updateIngredient(result._id, { stock: result.stock })
          .subscribe((data) => {
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Data Completed',
            }).then(() => {
              this.getAll();
            });
          });
      } else {
        this.stockManagementService.addIngredient(result).subscribe((data) => {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Data Completed',
          }).then(() => {
            this.getAll();
          });
        });
      }
    });
  }

  onDelete(id: any) {
    this.stockManagementService.deleteIngredient(id).subscribe(() => {
      this.getAll();
    });
  }
}
