import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IndexContainer from '../containers/IndexContainer';
import WelcomeContainer from '../containers/WelcomeContainer';

const App = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <IndexContainer/>
                </Route>
                <Route path="/welcome">
                    <WelcomeContainer />
                </Route>
                <div className="container mt-5 text-center">
                    <h2>404 Not found</h2>
                </div>
            </Switch>
        </BrowserRouter>
    ) 
};
export default App;
