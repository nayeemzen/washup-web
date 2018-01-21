import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';

const AuthenticatedRoute = ({component: Component, render, path, isAuthenticated, ...rest}) => {
  return <Route {...rest} render={props => {
    if (isAuthenticated && !path.startsWith('/login')) {
      return render ? render() : <Component {...props}/>;
    }

    if (path.startsWith('/login')) {
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