import React from 'react';
import portal from '../img/portal.png';

function PageLoading () {

    return(
        <div className="row justify-content-center">
            <div className="col-12 text-center">
                <img src={portal} alt="Loader Rick" className="w-50"/>
            </div>
            <div className="col-12 text-center">
                <h3>
                Loadin...
                </h3>
            </div>
        </div>
    )
}

export default PageLoading