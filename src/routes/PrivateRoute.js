import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from "react-router-dom";

const PrivateRoute = ({ component: Component, isLogged, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isLogged ? (
                <Component {...props}/>
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
)

PrivateRoute.propTypes = {
    component: PropTypes.func.isRequired,
    location: PropTypes.object,
    isLogged: PropTypes.bool.isRequired
}

const mapStateToProps = (state, ownProps) => ({isLogged: state.authenticate.logged})
export default withRouter(connect(mapStateToProps)(PrivateRoute))