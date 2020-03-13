import React from 'react';
import { BrowserRouter, Route, Switch } from  'react-router-dom';
import Home from '../Pages/Home';
import Character from '../Pages/Character';


function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={ Home } />
                <Route exact path="/character" component={ Character } />
            </Switch>
        </BrowserRouter>
    )
}

export default App;