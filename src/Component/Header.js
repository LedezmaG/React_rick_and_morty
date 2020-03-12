import React from 'react';
import rickmorty from '../img/pngguru.png';

function Header () {

    return(
        <div className="row justify-content-center">
            <img src={rickmorty} alt="Rick And Morty" />
        </div>
    )
}

export default Header