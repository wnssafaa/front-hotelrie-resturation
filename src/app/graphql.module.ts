import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';

const uri ='http://127.0.0.1:8000/graphql';
@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink): ApolloClientOptions<any> => {
        return {
          link: httpLink.create({ uri }),
          cache: new InMemoryCache(),
        };
      },
      deps: [HttpLink],
    },
  ],
})
export class GraphqlModule { }
