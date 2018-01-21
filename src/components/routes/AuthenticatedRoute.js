import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = ({ component: Component, render, path, isAuthenticated, ...rest }) => {
  return <Route {...rest} render={props => {
    if (!isAuthenticated) {
      if (path.startsWith('/login')) {
        return <Component {...props}/>;
      }

      return (
        <Redirect to={{
          pathname: '/login',
          state: {from: props.location}
        }}/>
      );
    }

    if (path.startsWith('/login')) {
      return (
        <Redirect to={{
          pathname: '/activity',
          state: {from: props.location}
        }}/>
      );
    }

    if (render) {
      return render();
    }

    return <Component {...props}/>;
  }}/>;
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: true
  }
};

export default connect(mapStateToProps, {})(AuthenticatedRoute);