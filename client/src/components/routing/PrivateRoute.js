import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';


const PrivateRoute = ({
  component: Component,
  cart: { products },
  ...rest
}) => (
    <Route
      {...rest}
      render={props =>
        (<Component {...props} />)
      }
    />
  );

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps)(PrivateRoute);