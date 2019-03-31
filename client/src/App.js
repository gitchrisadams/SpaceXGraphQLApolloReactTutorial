import React, { Component } from 'react';
import './App.css';
import logo from './images/spaceXLogo.jpg';
import Launches from './components/Launches';
import Launch from './components/Launch';

// Apollo/GraphQL imports
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

// React Router:
import {BrowserRouter as Router, Route} from 'react-router-dom';

const client = new ApolloClient({
  uri: '/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <img src={logo} alt="SpaceX" className='main-logo'/>
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
