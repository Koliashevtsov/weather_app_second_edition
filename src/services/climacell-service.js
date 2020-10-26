import axios from 'axios';

// i use climacell api 'www.climacell.co'

class ClimacellService {
  constructor(){
    this.apiUrlMain = 'https://api.climacell.co/v3/weather/forecast/daily?';
    this.apiKey = 'FIBZXzi9lrqPFAZ3aDKTPjDn9KArE2FG';
  }

  async getDailyWeather(date, city){
    const { lat, lon } = city;
    const unitSystem = 'si';
    const startTimeISO = date.toJSON(); // transform date to appropriate form to api
    const lastDayInMiliseconds = date.setDate(date.getDate() + 7) // Warning setDate change our object date
    console.log(startTimeISO);
    const endTime = new Date(lastDayInMiliseconds);
    const endTimeISO = endTime.toJSON(); // transform date to appropriate form to api
    console.log(endTimeISO);
    const fields = 'temp%2Cweather_code';

    try {
      const res = await axios.get(this.apiUrlMain, {
        params: {
          lat: lat,
          lon: lon,
          unit_system: unitSystem,
          start_time: startTimeISO,
          end_time: endTimeISO,
          fields: ['temp', 'weather_code'],
          apikey: this.apiKey
        }
      })
      console.log(res);
      return res.data.map(this._transformWeekWeather);
    } catch (err) {
      return err;
    }
  }

  _transformWeekWeather(weather){
    return {
      date: weather.observation_time.value,
      minTemp: weather.temp[0].min.value,
      maxTemp: weather.temp[1].max.value,
      description: weather.weather_code.value
    };
  }

}
export default ClimacellService;
