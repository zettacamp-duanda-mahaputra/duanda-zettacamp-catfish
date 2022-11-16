import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class StockManagementService {
  constructor(private apollo: Apollo) {}

  getAllIngredients() {
    return this.apollo.watchQuery({
      query: gql`
        query {
          GetAllIngredients(paginator: { limit: 30, page: 0 }) {
            data {
              _id
              name
              stock
              status
            }
          }
        }
      `,
    });
  }

  getOneIngredient(data: any) {
    const id = data._id
    return this.apollo.query({
      query: gql`
        query getOneIngredient($id: ID){
          getOneIngredient(id: $id) {
            _id
            name
            stock
          }
        }
      `,
      variables:{id}
    });
  }

  addIngredient(value:any){
    const name = value.name
    const stock = Number(value.stock)

    return this.apollo.mutate({
      mutation: gql`
      mutation createIngredient($name: String, $stock: Int){
          createIngredient(data: {name: $name, stock: $stock}){
            _id
            name
            status
            stock
          }
      }`,
      variables:{name, stock}
    })
  }

  deleteIngredient(){
    
  }

}
