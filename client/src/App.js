import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Chart from './components/Chart';
import NotFound from './components/NotFound';
import { Dashboard } from './components/landingPage';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Switch>
            <Route exact path="/" component = {dashboard}>
              <Chart/>
            </Route>
            <Route exact path="/Signin">
              <SignIn />
            </Route>
            <Route exact path="/SignUp/">
              <SignUp/>
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

