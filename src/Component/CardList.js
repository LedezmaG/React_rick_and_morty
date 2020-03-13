import React from 'react';
import { Link } from 'react-router-dom';

class CardList extends React.Component{
    render() {

        const p = this.props.character;

        if (this.props.character.length === 0 ) {
            return(
                <div>
                    <h3>No badges found</h3>
                </div>
            )
        }

        return (
        
            <div className="col-3 ">
                <div className="box">
                    <img src={ p.image } alt={p.origin.name} className="img-fluid mb-3"/>
                    <h5>{p.name}</h5> 
                    <p>
                        It's {p.status}<br/>
                        {p.gender}<br/>
                        {p.species}
                    </p>
                    <div className="text-center">
                        <Link className="btn btn-secondary" to={`/character`}>See more</Link>
                    </div>

                </div>
            </div>

        );
    }
}

export default CardList