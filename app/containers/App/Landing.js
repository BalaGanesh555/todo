import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Corporate from '../Templates/Corporate';
import { HomePage, NotFound } from '../pageListAsync';
import TodoFirebase from './Application'
class Landing extends React.Component {
  render() {
    return (
      <Corporate>
        <div>
          <Route path="/" component={HomePage} />
          {/*<Route component={TodoFirebase} />*/}
        </div>
      </Corporate>
    );
  }
}

export default Landing;
