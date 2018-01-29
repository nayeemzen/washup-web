import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';

const whitelist = new Set(['/', '/login', '/signup']);

const AuthenticatedRoute = ({component: Component, render, path, isAuthenticated, ...rest}) => {
  return <Route {...rest} render={props => {
    if (isAuthenticated && !whitelist.has(path)) {
      return render ? render() : <Component {...props}/>;
    }

    if (whitelist.has(path)) {
      return isAuthenticated
        ? <Redirect to={{pathname: '/activity', state: {from: props.location}}}/>
        : <Component {...props}/>;
    }

    return (
      <Redirect to={{
        pathname: '/login',
        state: {from: props.location}
      }}/>
    );
  }}/>
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated
  }
};

export default connect(mapStateToProps, {})(AuthenticatedRoute);