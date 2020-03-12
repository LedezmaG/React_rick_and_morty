import React from 'react';
import portal from '../img/portal.png';

function PageLoading () {

    return(
        <div className="row justify-content-center">
            <img src={portal} alt="Loader Rick" />
            Loadin...
        </div>
    )
}

export default PageLoading