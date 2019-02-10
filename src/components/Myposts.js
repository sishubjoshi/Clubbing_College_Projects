import React, { Component } from 'react'
import Sidenav from './Sidenav';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Display from './Display';

const client = new ApolloClient({
  uri: "https://ccpgraphql.herokuapp.com/v1alpha1/graphql"
});

const GET_STUDENTS = gql`
  {
    posts {
      username
      post_id
      post
      heading
    }
  }
`;

export default class Myposts extends Component {

  render() {
    return (
      <div>
      <ApolloProvider client={client}>
        <div className="row">
          <div className="col col-2 side-nav">
              <Sidenav />
          </div>
          <div className="col ">
            {/* <h1>hello</h1> */}
            <Query query={GET_STUDENTS}>
            {({ loading, error, data }) => {
              if (loading) return "Loading...";
              if (error) return `Error! ${error.message}`;

              return(
                <div>
                  <Display data={data}/>
                </div>
              )
            }}
          </Query>
          </div>
        </div>
        </ApolloProvider>
      </div>
    )
  }
}
