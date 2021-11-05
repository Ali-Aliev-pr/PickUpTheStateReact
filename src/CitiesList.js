import React from 'react';

export default function CitiesList(props) {
    return(
        <ul>
            {props.cities.map(i => (<li key={i.name}>{i.name}, {i.description}</li>))}
        </ul>
    )
}