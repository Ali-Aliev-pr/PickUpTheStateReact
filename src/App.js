import React, {useState} from 'react';
import CitiesList from "./CitiesList";
import City from "./City";
import './App.css';

function App() {
    const [cities, setCities] = useState([
        {name: 'Moscow', description: 'The capital of Russia'},
        {name: 'Madrid', description: 'The capital of Spain'}
    ])

    const handlerChangeCity = (index, description) => {
        setCities(cities.map((city, i) => {
            if (index === i) {
                return {
                    name: city.name,
                    description: description
                }
            } else {
                return city
            }
        }))
    }

  return(
      <div>
        <h1>Hello World</h1>
          <City cities={cities} onChangeCity={handlerChangeCity}/>
          <CitiesList cities={cities}/>
      </div>
  )
}

export default App;



// setCities(
//     cities.map((city, i) => {
//         if (i === index) {
//             return { name: city.name, description }
//         } else {
//             return city
//         }
//     })
// )