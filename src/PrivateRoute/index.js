import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({component: Component,onlineUser, ...rest}) => (
    <Route {...rest}
           render={props =>onlineUser() ? (<Component {...props}/>) : (
               <Redirect to={{
                   pathname: "/login",
                   state: {from: props.location}
               }}/>)
           }/>
);
export default PrivateRoute;