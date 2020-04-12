import React from 'react';
import './styles/App.scss';
import ProductsContainer from './components/containers/productContainer/ProductsContainer';

// Redux 
import store from '../src/redux_store'
import { Provider } from 'react-redux';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ProductsContainer />
      </Provider>
    </div>
  );
}

export default App;
