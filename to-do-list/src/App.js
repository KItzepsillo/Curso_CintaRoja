import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
//Importanto Container
import MainContainer from './containers/MainContainer/MainContainer';
import NotFound from './containers/NotFound/NotFound';
import AddTaskContainer from './containers/AddTaskContainer/AddTaskContainer';
import AppNav from './components/AppNav/AppNav';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppNav />
        <Switch>
          <Route exact path="/" component={MainContainer}/>
          <Route exact path="/add-task" component={AddTaskContainer}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
