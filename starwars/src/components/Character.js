import React from 'react';
import Planet from './Planet'
import './StarWars.css';

const Character = props => {
    return (
        <div className='CharacterCard'>
            <div className='name'>
                <h1>
                    {props.characterOnProps.name}
                </h1>
            </div>
            <div className='info'>
                <h2>BirthDate:{props.characterOnProps.birth_year}</h2>
                <h2>Gender: {props.characterOnProps.gender}</h2>
                <h2>Height: {props.characterOnProps.height}</h2>
                <h2>Hair Color: {props.characterOnProps.hair_color}</h2>
                <planet />
            </div>
        </div>
    );
}


export default Character;