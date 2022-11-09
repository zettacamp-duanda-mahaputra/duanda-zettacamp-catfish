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
    $ref:String
    $title:String
    $sub_title:String
    $description:String
  ){
    CreatePromo(promo_input:{ref:$ref,title:$title,sub_title:$sub_title,description:$description})
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
      variables: {ref,title,sub_title,description}
    })
  }
}
