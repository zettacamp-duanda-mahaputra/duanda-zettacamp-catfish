import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class PromoManagementService {

  constructor(private apollo: Apollo) { }

  getPromos() {
    return this.apollo.query({
      query: gql`
        query {
          GetAllPromos(pagination: { limit: 20, page: 0 }) {
            _id
            image_url
            title
            sub_title
            ref
            description
          }
        }
      `,
    });
  }
}
