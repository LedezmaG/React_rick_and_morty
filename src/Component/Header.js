import React from 'react';
import { Link } from 'react-router-dom';
import rickmorty from '../img/pngguru.png'

function Header () {

    return(
        <div className="row justify-content-center">
            <img src={rickmorty} alt="Rick And Morty" />
            {/* <h3> Cuenta: {count} </h3>
            <button type="button" onClick={this.handleClick} >Click</button> */}
        </div>
    )
}

export default Header