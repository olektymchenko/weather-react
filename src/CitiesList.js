import React from 'react'

const CitiesList = (props) => {

    let citiesList = props.cities.map((element, index) => {
        let pressureCheck = (element.pressure !== null) ? element.pressure : "brak danych";
        return (<div className="city" key={index}>
            <h2>{element.cityName}</h2>
            <p>Temperatura: {element.temperature} st. C.</p>
            <p>Ciśnienie: {pressureCheck} hPa</p>
        </div>)
    })

    return (
        <div className="citiesBlock">
            {citiesList}
        </div>
    )

}
export default CitiesList