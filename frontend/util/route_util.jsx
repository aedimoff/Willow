import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router';

const LoggedInProtected = ({ component: Component, path, loggedIn, exact, redirectPath }) => (

    <Route 
        path={path}
        exact={exact}
        render={props => 
        loggedIn ? <Component {...props} /> : <Redirect to={redirectPath} />
    }
    />
);

const LoggedOutProtected = ({ component: Component, path, loggedIn, exact, redirectPath }) => (

    <Route 
        path={path}
        exact={exact}
        render={props => 
        !loggedIn ? <Component {...props} /> : <Redirect to={redirectPath} />
    }
    />
);



const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.id) 
});

export const LoggedInProtectedRoute = withRouter(
    connect(mapStateToProps, null)(LoggedInProtected)
);

export const LoggedOutProtectedRoute = withRouter(
    connect(mapStateToProps, null)(LoggedOutProtected)
);