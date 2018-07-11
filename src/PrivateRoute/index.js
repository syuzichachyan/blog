import React from 'react';
import {Redirect,Route} from 'react-router-dom';

const isAutenticated = () => { return ( JSON.parse(localStorage.getItem('usersData')) || []).some(el => el.isAuthenticated);

};
const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest}
           render={props =>isAutenticated() ? (<Component {...props}/>) : (
               <Redirect to={{
                   pathname: "/login",
                   state: {from: props.location}
               }}/>)
           }/>
);
export default PrivateRoute;