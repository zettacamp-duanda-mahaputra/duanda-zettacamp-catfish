import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { School } from 'src/app/models/school.model';
import { SchoolManagementService } from '../school-management.service';

@Component({
  selector: 'app-school-table',
  templateUrl: './school-table.component.html',
  styleUrls: ['./school-table.component.css']
})
export class SchoolTableComponent implements OnInit {
  displayedColumns: string[] = ['long_name', 'short_name', 'status'];
  schools: School[] = [];
  dataSource = new MatTableDataSource();

  constructor(private schoolManagementService: SchoolManagementService) { }

  ngOnInit(): void {
    this.schoolManagementService
      .getSchools()
      .subscribe((school: any) => {
        this.schools.push(school.data.GetAllSchools);
        this.dataSource = new MatTableDataSource(school.data.GetAllSchools);
      });
  }

}
