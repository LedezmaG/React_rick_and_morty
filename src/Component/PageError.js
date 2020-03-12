import React from 'react';
import ErrorMsj from '../img/Rick-Spaceship.png';


function PageLoading (props) {

    return(
        <div className="row justify-content-center">
            <img src={ErrorMsj} alt="Loader Rick" />
            <h4>
                {this.props.error}
            </h4>
        </div>
    )
}

export default PageLoading