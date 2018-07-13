import React from 'react';
import {Redirect,Route} from 'react-router-dom';
import Login from '../Login';



const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest}
           render={props =>Login.onlineUser() ? (<Component {...props}/>) : (
               <Redirect to={{
                   pathname: "/login",
                   state: {from: props.location}
               }}/>)
           }/>
);
export default PrivateRoute;