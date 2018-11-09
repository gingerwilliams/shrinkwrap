import React from 'react';
import { Route, Router , Switch } from 'react-router-dom';
import history from './history';

import App from './components/App';
import Callback from './components/Callback';

class MainRoutes extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route path="/" component={App} />
                    <Route path="/callback" component={Callback}/>
                </div>
                
            </Router>
        )
    } 
}

export default MainRoutes;