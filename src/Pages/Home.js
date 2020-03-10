import React from 'react';
import Header from '../Component/Header';
class Home extends React.Component{

    state={
        message: `Hi! i'm a message`
    }

    render(){
        return(
            <h1> <Header message={this.state.message}/> </h1>
        );
    }

}

export default Home;