import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
   
    return(
        <div>
            {props.message}
            <Link className="" to={'/call'}> Call API</Link>
        </div>
    )
    
}

export default Header