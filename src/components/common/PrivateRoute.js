import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({component: Component, isSignedIn, ...rest}) => (
    <Route
        {...rest}
        render = {props => 
            isSignedIn === true ? (
                <Component {...props} />
            ) : (
                <Redirect to="/signin" />
            )
        }
    />
)

const mapStateToProps = state => ({
    isSignedIn: state.user.token ? true : false
})

export default connect(mapStateToProps)(PrivateRoute);