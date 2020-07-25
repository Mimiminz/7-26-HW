import React from "react";

const WEATHER_API = 'http://localhost:8888/weather-service/weathers'

class Weather extends React.Component{
  constructor(props) {
    super(props)
    }
  state = {
    weather: [],
    main: [],
  }
  componentDidMount() {
    const { cityName } = this.props.match.params;
    const api = `${WEATHER_API}?cityName=${cityName}`;

    const weatherData = fetch(api)
      .then(res => res.json())
      .then(data => {
        this.setState({
          name: data.weather[0].main,
          weatherDetail: data.weather[0].description,
          temperature: data.main.temp,
        });
      });
    fetch().then().catch(function(err) {
            console.error(err);
     });
  }
  render(){
    const { cityName } = this.props.match.params;
    const { name, weatherDetail, temperature } = this.state;
    return(
      <div>
        <h2>CityName : {cityName}</h2>
        <h3>날씨 : {name}</h3>
        <h3>날씨 상세 : {weatherDetail}</h3>
        <h3>온도 : {temperature}</h3>
      </div>
    );
  }
}
export default Weather;