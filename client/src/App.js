import React, { Component } from 'react';
import './App.css';
import logo from './images/spaceXLogo.jpg';
import Launches from './components/Launches';

// Apollo/GraphQL imports
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <img src={logo} alt="SpaceX" className='main-logo'/>
          <Launches />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
