import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Drop } from '../models/drop';
import { Dropdown } from '../models/dropDown';
import { Table } from '../models/table';
import { TableService } from '../services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'user_type', 'email', 'status'];
  Tables: Table[] = [];
  dataSource = new MatTableDataSource(this.Tables);

  nameFilter = new FormControl();
  userTypeFilter = new FormControl();
  emailFilter = new FormControl();

  filteredValues = { name: '', user_type: '', email: ''};

  constructor(private tableService: TableService) {}

  ngOnInit() {
    this.tableService.table$.subscribe((data) => {
      this.Tables = data;
      console.log(this.Tables);
      this.dataSource = new MatTableDataSource(this.Tables);

      this.nameFilter.valueChanges.subscribe((nameFilterValue) => {
        this.filteredValues['name'] = nameFilterValue;
        this.dataSource.filter = JSON.stringify(this.filteredValues);
      });
      this.userTypeFilter.valueChanges.subscribe((userTypeFilterValue) => {
        this.filteredValues['user_type'] = userTypeFilterValue;
        this.dataSource.filter = JSON.stringify(this.filteredValues);
      });
      this.emailFilter.valueChanges.subscribe((emailFilterValue) => {
        this.filteredValues['email'] = emailFilterValue;
        this.dataSource.filter = JSON.stringify(this.filteredValues);
      });
      this.dataSource.filterPredicate = this.customFilterPredicate();
    });
    this.fieldListener();
  }

  customFilterPredicate() {
    const myFilterPredicate = function (data: Table, filter: string): boolean {
      console.log(data,filter);
    
      
      let searchString = JSON.parse(filter);
      let nameFound =
        data.last_name
          .toString()
          .trim()
          .toLowerCase()
          .includes((searchString.name || '').toLowerCase())
      let userTypeFound =
        data.company.user_type
        .toString()
        .trim()
        .toLowerCase()
        .includes((searchString.user_type || '').toLowerCase())
      let statusFound = data.user_status.includes(searchString.status || '')
      let emailFound =
        data.email.includes(searchString.email || '')
        console.log(nameFound, userTypeFound, emailFound, statusFound);
        
      return nameFound && userTypeFound && emailFound && statusFound;
    };
    return myFilterPredicate;
  }

  availableSources: Dropdown[] = Drop;

  sourceFilter = new FormControl('');

  filterValues: any = {
    status: '',
  };

  private fieldListener() {
    this.sourceFilter.valueChanges.subscribe((status) => {
      console.log(status);

      this.filterValues.status = status;
      this.dataSource.filter = JSON.stringify(this.filterValues);
      console.log(this.dataSource);
    });
  }

  
}
