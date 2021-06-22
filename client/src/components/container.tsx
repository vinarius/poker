import React, { FunctionComponent, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import '../App.css';
import { MyContext } from './StateProvider/stateProvider';
import { Table } from './Table/table';
import { MainMenu } from './MainMenu/mainMenu';
import {Rules} from './Rules/rules';

export const Container: FunctionComponent = () => {

  const { inGame } = useContext(MyContext);

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/howtoplay'>
            <Rules />
          </Route>
          <Route path='/'>
            { inGame ? <Table /> : <MainMenu /> }
          </Route>
        </Switch>
      </Router>
    </div>
  );
};