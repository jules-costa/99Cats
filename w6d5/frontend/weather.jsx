import React from 'react';

class Weather extends React.Component {

  constructor(props) {
    super(props);
    this.state = { city: '', temp: '' };
  }

  componentDidMount() {
    this.successWeather();
  }

  successWeather() {
    let request = new XMLHttpRequest();
    request.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=SanFrancisco&units=imperial&APPID=c9949ff2c0e2f7ebb6cfab26a74ed45b`, true);
    request.onload = () => {
      let response = JSON.parse(request.responseText);
      this.setState({ city: response.name, temp: response.main.temp });
    };
    request.send();
  }

  render () {
    return (
      <section className="flx weather">
        <div className="flx city flx-justify">
          <p>city: </p>
          <p>{this.state.city}</p>
        </div>
        <div className="flx temp flx-justify">
          <label>temperature: </label>
          <p>{this.state.temp} F</p>
        </div>
      </section>
    );
  }

}

export default Weather;
