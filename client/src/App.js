import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Landing from './components/Layout/Landing';
import Routes from './components/Routing/Routes';
import { loadUser } from './actions/Auth';
import CssBaseline from '@material-ui/core/CssBaseline';
//redux
import { Provider } from 'react-redux'; //redux is separate from react. this package will make them work together
import store from './store';
import setAuthToken from './setAuthToken';
import './app.css';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);


  const theme = createMuiTheme({
    fontFamily: `'Oxygen', sans-serif` ,
    fontSize: '1.6rem',
    boxSizing: 'border-box',

    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            fontFamily: `'Oxygen', sans-serif` ,
          }
        },
        
      },
      MuiInput: {
        underline: {
          '&:before': { //underline color when textfield is inactive
            backgroundColor: 'none',
          },
          '&:hover:not($disabled):before': { //underline color when hovered 
            backgroundColor: 'none',
          },
        }
      }
    }
  });

  return (
    //wrap everything with provider so every component can access state.
    <Provider store={store}>
      <Router>
           <ThemeProvider theme={theme}>
           <CssBaseline/>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Navbar />
              <Route component={Routes} />
            </Switch>
          </ThemeProvider>
      </Router>
    </Provider>
  );
};
export default App;
