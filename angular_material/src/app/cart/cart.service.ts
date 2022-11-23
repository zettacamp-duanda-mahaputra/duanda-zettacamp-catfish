import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private apollo: Apollo) {}

  get() {
    return this.apollo.query({
      query: gql`
        query getCart {
          getCart {
            _id
            order_status
            total_price
            menu {
              _id
              amount
              note
              status_recipe
              recipe_id {
                recipe_name
                price
                image
              }
            }
          }
        }
      `,
      fetchPolicy: 'network-only',
    });
  }

  add(data: any) {
    console.log(data.note);

    return this.apollo.mutate({
      mutation: gql`
        mutation AddToCart($addToCartId: ID, $amount: Int, $note: String) {
          addToCart(id: $addToCartId, amount: $amount, note: $note) {
            menu {
              recipe_id {
                recipe_name
                price
              }
            }
          }
        }
      `,
      variables: data,
    });
  }

  remove(id: any) {
    console.log(id);

    return this.apollo.mutate({
      mutation: gql`
        mutation ReduceCart($id: ID) {
          reduceCart(id: $id) {
            _id
          }
        }
      `,
      variables: { id },
    });
  }

  order(id: any) {
    return this.apollo.mutate({
      mutation: gql`
       mutation Order($id: ID) {
        order(id: $id) {
          order_status
          menu {
            status_recipe
            recipe_id {
              recipe_name
            }
          }
        }
      }
      `,
      variables: { id }
    });
  }

  edit(id: any, amount: any, note: any) {
    return this.apollo.mutate({
      mutation: gql`
        mutation EditCart($id: ID, $amount: Int, $note: String) {
          editCart(id: $id, amount: $amount, note: $note)
        }
      `,
      variables: { id, amount, note },
    });
  }
}
