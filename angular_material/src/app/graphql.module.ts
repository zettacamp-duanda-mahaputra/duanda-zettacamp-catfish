import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import { HttpHeaders } from '@angular/common/http';

const uri = 'https://4179-103-236-192-220.ap.ngrok.io/graphql'; 
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({uri,
      // headers: new HttpHeaders().set(
      //   'Authorization',
      //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmZlYzVjMmNlNjM1YjJmYjZhODFmMmQiLCJlbWFpbCI6Im0ubXVnbmllcjJAeW9wbWFpbC5jb20iLCJpYXQiOjE2Njc4ODk2MDgsImV4cCI6MTY2Nzk3NjAwOH0.c7KwkQdeMa2ieOh4Gc6AJ7OKPl_PufwQlrttx-qdRU'
      //   )
    }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
