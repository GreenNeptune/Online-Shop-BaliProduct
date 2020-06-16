import React from 'react';
import 'bootstrap/scss/bootstrap.scss';
import './styles/App.scss';

// Redux 
import store from '../src/redux_store'
import { Provider } from 'react-redux';
import CartContainer from './components/containers/CartContainer';
import ProductsContainer from './components/containers/ProductsContainer';

// router 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './components/routing/PrivateRoute';
import Menu from './components/Menu';

function App() {

  return (
    <div className="app container">
      <Provider store={store}>
        <Router>
          <Menu />
          <Switch >
            < Route exact path='/' component={ProductsContainer} />
            < PrivateRoute exact path='/cart' component={CartContainer} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
