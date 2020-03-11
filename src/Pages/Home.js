import React from 'react';
import Header from '../Component/Header';
import Buacador from '../Component/Buacador';
import CardList from '../Component/CardList';

class Home extends React.Component{

    state={
        message: `Hi! i'm a message`
    }

    render(){
        return(
            <div className="">
                <Header />
                <div className="content">
                    <Buacador />
                </div>
                <div className="card-body">
                    <CardList />
                </div>
            </div>
        );
    }

}

export default Home;