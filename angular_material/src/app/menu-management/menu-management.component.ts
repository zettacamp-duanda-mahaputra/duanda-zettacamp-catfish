import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from './dialog/dialog.component';
import { MenuManagementService } from './menu-management.service';

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
    this.menuManagementService.get().subscribe((data: any) => {
      this.dataSource.data = data.data.getAllRecipes.data;
    });
  }

  openDialog(data?: any): void {
    const dialogRef = this.dialog.open(DialogComponent, { data: data || null });

    dialogRef.afterClosed().subscribe(() => {});
  }
} 

// onDelete() {
//   // this.stockManagementService.deleteIngredient(id).subscribe(() => {
//   //   this.stockManagementService.getAllIngredients().refetch();
//   // });
// }
