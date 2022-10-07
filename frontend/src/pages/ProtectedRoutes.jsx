import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'

const ProtectedRoutes = ({ component: Component, ...rest }) => {

    const user = useSelector(s => s.auth.user);

    return (
        <Route {...rest} render={(props) => {
            if (!user) {
                return (
                    <Redirect to={{ pathname: "/giris" }} />
                )
            }
            if (user) {
                return (
                    <Component {...props} user={user} />
                )
            }
        }}>
        </Route>
    )
}

export default ProtectedRoutes