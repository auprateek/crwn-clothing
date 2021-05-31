import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';

import './App.css';

const HatsPage = () =>
{
  return(
    <div>Hats Page </div>
  )
}


function App() {
  return (
    
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/Hats' component= {HatsPage} />
    </Switch>
    
  );
}

export default App;
