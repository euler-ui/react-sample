import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Signin from './portal/signin';
import Home from './home';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
const App = () => {
  return (
    <MuiThemeProvider>
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/signin" component={Signin} />
          <Route component={Signin} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};
export default App;
