import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom'
import Home from '../components/Home/Home';


const Routers = () => {
    return ( 
        <div>
            <Router>

<Route exact path='/' component={Home}/>
            </Router>
        </div>
     );
}
 
export default Routers;