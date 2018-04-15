import React from "react";

import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = "4357a4caaaf40ce9a20183534a69a528";

class App extends React.Component {
    state={
        temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }
    getWeather =  async(e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&appid=4357a4caaaf40ce9a20183534a69a528&units=imperial');
        const data = await api_call.json();
        if(city && country){
            console.log(data);
            this.setState({
                temp:  data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            })
        } else{
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter a valid City and Country."
            })
        }
        
    }

    render(){
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div class='title'>
                                    <Titles />  
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 form-container">
                                    <Form getWeather={this.getWeather}/>
                                    <Weather
                                        temp={this.state.temp}
                                        city={this.state.city}
                                        country={this.state.country}
                                        humidity={this.state.humidity}
                                        description={this.state.description}
                                        error={this.state.error}
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;