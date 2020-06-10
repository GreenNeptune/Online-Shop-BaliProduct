import React from 'react';
import './styles/App.scss';

// Redux 
import store from '../src/redux_store'
import { Provider } from 'react-redux';
import CartContainer from './components/containers/CartContainer';
import ProductsContainer from './components/containers/ProductsContainer';
import AutoComplete from './components/AutoComplete';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div className="nav">
          <ul className="nav-links-left">
            <li style={{ boxShadow: '0 2rem 8rem rgba(0, 0, 0, 0.15)' }}>BaliProduct</li>
            <AutoComplete />
            <li className="logo">
              <i className="fas fa-shopping-cart fa-3x"></i>
            </li>
          </ul>
        </div>
        <CartContainer />
        <ProductsContainer />
      </Provider>
    </div >
  );
}

export default App;
