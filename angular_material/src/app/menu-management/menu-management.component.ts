import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from './dialog/dialog.component';
import { MenuManagementService } from './menu-management.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-menu-management',
  templateUrl: './menu-management.component.html',
  styleUrls: ['./menu-management.component.css'],
})
export class MenuManagementComponent implements OnInit {
  dataSource = new MatTableDataSource();
  displayedColumns: any[] = ['receipe_name', 'image','price', 'status', 'action'];
  constructor(
    private menuManagementService: MenuManagementService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.menuManagementService.get().subscribe((data: any) => {
      this.dataSource.data = data;
    });
  }

  openDialog(data?: any): void {
    const dialogRef = this.dialog.open(DialogComponent, { 
      data: data || null,
      width: '500px',
      height: '600px' 
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;

      if ('_id' in result) {
        this.menuManagementService
          .update(result._id, { stock: result.stock })
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
        this.menuManagementService.add(result).subscribe((data) => {
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

  onDelete(id:any) {
    this.menuManagementService.delete(id).subscribe(() => {
      this.getAll()
    });
  }
} 


