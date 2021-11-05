import React, {useState} from 'react';

export default function City(props) {
    const [currentIndex, setCurrentindex] = useState(0)

    const city = props.cities[currentIndex]


    return(
        <div>
            <h3>{city.name}</h3>
            <textarea
                defaultValue={city.description}
                // onChange={(e) => props.onChangeCity(currentIndex, e.target.value)}
                onChange={(e) => props.onChangeCity(currentIndex, e.target.value)}
            />
        </div>
    )
}