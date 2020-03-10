import React from 'react';
import { BrowserRouter, Route, Switch } from  'react-router-dom';
import Home from '../Pages/Home';
import Call from '../Pages/Call';


function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={ Home } />
                <Route exact path="/call" component={ Call } />
            </Switch>
        </BrowserRouter>
    )
}

export default App;