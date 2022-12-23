import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private apollo: Apollo) { }

  saveTokenFCM(token: any) {
    return this.apollo.query({
      query: gql`
      mutation SaveTokenFCM($token: String) {
      saveTokenFCM(token: $token)
    }
      `, fetchPolicy: 'network-only', variables: {token }
    })
  }
}
