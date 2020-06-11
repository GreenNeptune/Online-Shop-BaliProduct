import React from 'react';
import Nav from './components/Nav';
import './styles/App.scss';

// Redux 
import store from '../src/redux_store'
import { Provider } from 'react-redux';
import CartContainer from './components/containers/CartContainer';
import ProductsContainer from './components/containers/ProductsContainer';

// router 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './components/routing/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Nav />
          <Switch >
            < Route exact path='/' component={ProductsContainer} />
            < PrivateRoute exact path='/cart' component={CartContainer} />
          </Switch>
        </Router>
      </Provider>
    </div >
  );
}

export default App;
