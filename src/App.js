import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.componet';
import Authentication from './pages/authentication/authentication.component';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={Authentication} />
      </Switch>
    </div>
  );
}

export default App;
