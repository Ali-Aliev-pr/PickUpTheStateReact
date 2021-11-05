import React, {useState} from 'react';
import CitiesList from "./CitiesList";
import City from "./City";
import './App.css';

function App() {
    const [cities, setCities] = useState([
        {name: 'Moscow', description: 'The capital of Russia'},
        {name: 'Madrid', description: 'The capital of Spain'}
    ])

    const handlerChangeCity = (n, desc) => {
        setCities(cities.map((name, index) => {
            console.log(name)
        //     if (index === n) {
        //         return {...name, desc}
        //     }
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