import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Landing from './components/Layout/Landing';
import Routes from './components/Routing/Routes';
import { loadUser } from './actions/Auth';
//redux
import { Provider } from 'react-redux'; //redux is separate from react. this package will make them work together
import store from './store';
import setAuthToken from './setAuthToken';
import './app.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    //wrap everything with provider so every component can access state.
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};
export default App;
