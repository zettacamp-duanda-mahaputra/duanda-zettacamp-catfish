import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuManagementService {
  constructor(private apollo: Apollo) {}

  get() {
    return this.apollo.query({
      query: gql`
        query {
          getAllRecipes(
            paginator: { limit: 30, page: 0 }
          ) {
            data {
              _id
              available
              price
              recipe_name
              image
              description
              status
            }
          }
        }
      `,fetchPolicy:'network-only'
    }).pipe(map((result:any)=>{
       return result.data.getAllRecipes.data
    }))
  }

  getOne(id:any) {
    return this.apollo.query({
      query: gql`
        query getAllRecipes($id:ID){
          getAllRecipes(id:$id) {
              _id
              available
              price
              recipe_name
              image
              status
          }
        }
      `,fetchPolicy:'network-only',variables:{id}
    })
  }

  add(data: any) {
    data.price = Number(data.price)
    return this.apollo.mutate({
      mutation: gql`
      mutation createRecipe($data: recipeInput){
          createRecipe(data:$data){
            image
            _id
            price
            recipe_name
            status
          } 
      }`,
      variables:{data}
    });
  }

  update(data:any,id:any){
    return this.apollo.mutate({
      mutation: gql`
      mutation updateRecipe($data:recipeInput,$id:ID){
        updateRecipe(data:$data,id:$id)
      }`,
      variables:{data,id}
    })
  }

  delete(id:any){
    return this.apollo.mutate({
      mutation: gql`
      mutation deleteRecipe($id:ID){
        deleteRecipe(id:$id)
      }`,
      variables:{id}
    })
  }

  
}
