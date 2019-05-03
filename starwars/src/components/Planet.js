import React from 'react';



const Planet = props => {
    return (
        <div className="planetCard">
        <div className = "planet-name">
        <h2> Planet Name:
            {props.planetOnProps.name}
        </h2>
        </div>
        </div>
    )
}

export default Planet;