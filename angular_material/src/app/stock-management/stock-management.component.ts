import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { FormComponent } from './form/form.component';
import { StockManagementService } from './stock-management.service';

@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.component.html',
  styleUrls: ['./stock-management.component.css'],
})
export class StockManagementComponent implements OnInit {
  ingredients: [] = [];
  dataSource = new MatTableDataSource();
  displayedColumns: any[] = ['name', 'stock', 'status', 'action'];

  constructor(
    private stockManagementService: StockManagementService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.stockManagementService.getAllIngredients().valueChanges.subscribe((data: any) => {
      console.log(data);

      this.ingredients = data.data.GetAllIngredients.data;
      this.dataSource = new MatTableDataSource(
        data.data.GetAllIngredients.data
      );
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;

      this.stockManagementService.addIngredient(result).subscribe(() => this.stockManagementService.getAllIngredients().refetch())

      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Data Completed',
      });
    });
  }

  onDelete(){}
}
