import { Component, OnInit, OnDestroy } from '@angular/core';
import { Promo } from 'src/app/models/promo.model';
import { PromoManagementService } from '../promo-management.service';


@Component({
  selector: 'app-promo-list',
  templateUrl: './promo-list.component.html',
  styleUrls: ['./promo-list.component.css']
})
export class PromoListComponent implements OnInit {
  promos: Promo[] = [];


  constructor(private promoManagementService: PromoManagementService) { }

  ngOnInit(): void {
    this.promoManagementService
      .getPromos()
      .subscribe((promo: any) => {
        this.promos.push(promo.data.GetAllPromos[0]);
        console.log(this.promos);
      });
  }

}
