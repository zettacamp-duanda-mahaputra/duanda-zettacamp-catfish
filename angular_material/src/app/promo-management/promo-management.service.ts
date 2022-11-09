import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

const QUERY = `query {
  GetAllPromos(pagination:{page:0, limit:200}){
    _id
    image_url
    title
    sub_title
    ref
    description
  }
}`;

const MUTATE_QUERY = `
  mutation CreatePromo(
    $data: PromoInput
  ){
    CreatePromo(promo_input:$data)
    {
      title
      sub_title
      ref
      description
    }
  }`
 

@Injectable({
  providedIn: 'root',
})
export class PromoManagementService {
  constructor(private apollo: Apollo) {}

  getPromos() {
    return this.apollo.query({
      query: gql(QUERY),
    });
  }

  createPromo(data:any) {
    let ref = data.ref
    let title = data.title
    let sub_title = data.sub_title
    let description = data.description
    console.log(data);
    
    return this.apollo.mutate({
      mutation: gql(MUTATE_QUERY),
      variables: {data}
    })
  }
}
