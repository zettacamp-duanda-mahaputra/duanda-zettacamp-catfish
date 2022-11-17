import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

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
            match: { status: publish }
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
      `,
    });
  }

  add(value: any, id:any) {
    const name = value.recipe_name;

    return this.apollo.mutate({
      mutation: gql`
      mutation createRecipe($data: recipeInput){
          createRecipe(data:$data){
            image
            _id
            price
            recipe_name
            status
      }`,
      
    });
  }
}
