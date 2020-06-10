import React from 'react';
import './styles/App.scss';

// Redux 
import store from '../src/redux_store'
import { Provider } from 'react-redux';
import CartContainer from './components/containers/CartContainer';
import ProductsContainer from './components/containers/ProductsContainer';
import AutoComplete from './components/AutoComplete';

// router 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrivateRoute from './components/routing/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <div className="nav">
            <ul className="nav-links-left">
              <Link to='/'>
                <li style={{ boxShadow: '0 2rem 8rem rgba(0, 0, 0, 0.15)' }}>BaliProduct</li>
              </Link>
              <AutoComplete />
              <Link to='/cart'>
                <li className="logo">
                  <i className="fas fa-shopping-cart fa-3x"></i>
                </li>
              </Link>

            </ul>
          </div>
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
