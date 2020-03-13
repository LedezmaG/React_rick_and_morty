import React from 'react'
import Header from '../Component/Header';
import Buacador from '../Component/Buacador';

class Character extends React.Component{
    render() {
        return(
            <div className="">
                <Header />
                <div className="row justify-content-center">
                    <div className="col-6">
                        <Buacador />
                    </div>
                </div>
            </div>
        )
    }
}

export default Character