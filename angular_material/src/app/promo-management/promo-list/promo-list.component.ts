import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Promo } from 'src/app/models/promo.model';
import { PromoManagementService } from '../promo-management.service';
import Swal from 'sweetalert2';
import { PromoManagementComponent } from '../promo-management.component';


@Component({
  selector: 'app-promo-list',
  templateUrl: './promo-list.component.html',
  styleUrls: ['./promo-list.component.css'],
})
export class PromoListComponent implements OnInit {
  promos: Promo[] = [];
 
  dataSource = new MatTableDataSource<Promo>();

  constructor(
    private promoManagementService: PromoManagementService
  ) {}

  ngOnInit(): void {
    this.promoManagementService.getPromos().subscribe((promo: any) => {
      this.promos = (promo.data.GetAllPromos);
      console.log(this.promos);
    });
  }

}
