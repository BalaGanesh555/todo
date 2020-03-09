import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './Auth';
import Application from './Application';
import LandingCorporate from './Landing';
import ThemeWrapper, { AppContext } from './ThemeWrapper';
import HomePage from '../LandingPage/HomePage';
import Login from '../Pages/UsersFullstack/Login';
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

class App extends React.Component {
  render() {
    return (
      <ThemeWrapper>
        <AppContext.Consumer>
          {(changeMode) => (
            <Switch>
              
              <Route path="/" exact component={Login} />
              <Route
                path="/app"
                render={(props) => <Application {...props} changeMode={changeMode} />}
              />
          <Route component={Auth} />
            </Switch>
          )}
        </AppContext.Consumer>
      </ThemeWrapper>
    );
  }
}

export default App;
