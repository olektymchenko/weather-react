import React, { Component } from 'react'
import CitiesList from './CitiesList'

class Cities extends Component {

    constructor() {
        super();
        this.state = {
            citiesArray: [],
            inputCityValue: '',
            initialArrayForCities: []
        }
    }


    getCities() {
        let newCryptoArray = []
        fetch('https://danepubliczne.imgw.pl/api/data/synop').then(data => data.json()).then(cities => {
            for (let key in cities) {
                let currentCity = {}
                currentCity.cityName = cities[key].stacja;
                currentCity.temperature = cities[key].temperatura;
                currentCity.pressure = cities[key].cisnienie;
                newCryptoArray.push(currentCity);
            }
            this.setState({ citiesArray: newCryptoArray });
            this.setState({ initialArrayForCities: newCryptoArray })
        })
    }


    changeCityName = (event) => {
        event.preventDefault();
        this.setState({ inputCityValue: event.target.value });
        this.setState({
            citiesArray: this.state.initialArrayForCities.filter((elem) => {
                return elem.cityName.toUpperCase().includes(event.target.value.toUpperCase())
            })
        })

    }


    componentDidMount() {
        this.getCities();
    }

    render() {
        return (
            <div>
                <h1>Filtruj miasto</h1>
                <input type="text" placeholder="Wpisz miasto" value={this.state.inputCityValue} onChange={this.changeCityName} />
                <CitiesList cities={this.state.citiesArray} letter={this.state.inputCityValue} />
            </div>
        )
    }

}
export default Cities