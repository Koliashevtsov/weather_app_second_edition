import axios from 'axios';
import { DateTime } from 'luxon';

import { weatherDescriptions } from './weather-descriptions';

// i use climacell api 'www.climacell.co'

class ClimacellService {
  constructor(){
    this.apiUrlMain = 'https://api.climacell.co/v3/weather/forecast/';
    this.apiKey = 'FIBZXzi9lrqPFAZ3aDKTPjDn9KArE2FG';
  }

  async getDailyWeather(city){
    const { lat, lon } = city;
    const unitSystem = 'si';
    const objDateNow = DateTime.utc();
    const startTimeUTC = objDateNow.toString();
    console.log('startTimeUTC', startTimeUTC);
    const objDateLast = objDateNow.plus({days: 4});
    const endTimeUTC = objDateLast.toString();
    console.log('endTimeUTC', endTimeUTC);
    const fields = 'temp%2Cweather_code';

    try {
      const res = await axios.get(this.apiUrlMain + 'daily?', {
        params: {
          lat: lat,
          lon: lon,
          unit_system: unitSystem,
          start_time: startTimeUTC,
          end_time: endTimeUTC,
          fields: [ 'temp', 'weather_code' ],
          apikey: this.apiKey
        }
      })
      console.log(res);
      return res.data.map(this._transformDailyWeather.bind(this));
    } catch (err) {
      console.log('error', err);
      return err;
    }
  }


  async getHourlyWeather(date, city) {
    console.log('date come in => ', date);
    const { lat, lon } = city;
    const unitSystem = 'si';
    const fields = [ 'temp', 'weather_code' ];
    // api does not work with data in past
    // because hour in date equal 00:00, if date.getDate == today
    // i must set hour does not smaller then now
    const nowDate = DateTime.local().day;
    const searchingDate = DateTime.fromISO(date).day;
    console.log('nowDate', nowDate);
    console.log('searchingDate', searchingDate);
    let d
    if(searchingDate == nowDate){
      // if request today, i must set hours not in the past, so i set hours right now
      d = DateTime.local().toString();
    } else {
      // if request for another day, keep date from attribute
      d = date
    }
    const startTimeUTC = DateTime.fromISO(d).toUTC().toString();
    console.log('hourlyStartTime', startTimeUTC);
    const endTimeUTC = DateTime.fromISO(d).set({hour: 23, minutes: 59}).toUTC().toString()
    console.log('hourlyEndTime', endTimeUTC);

    try {
      const res = await axios.get(this.apiUrlMain + 'hourly?', {
        params: {
          lat: lat,
          lon: lon,
          unit_system: unitSystem,
          start_time: startTimeUTC,
          end_time: endTimeUTC,
          fields: fields,
          apikey: this.apiKey
        }
      })
      console.log(res);
      return res.data.map(this._transformHourlyWeather.bind(this))
    } catch (err) {
      return err;
    }
  }

  _transformHourlyWeather(weather){
    const id = new Date(weather.observation_time.value).getHours();
    const weatherCode = weather.weather_code.value;
      return {
        id: id,
        temperature: this._transformTemperature(weather.temp.value),
        description: weatherDescriptions[weatherCode]
      };
  }
  _transformDailyWeather(weather){
    const weatherCode = weather.weather_code.value;
    return {
      date: DateTime.fromISO(weather.observation_time.value).toString(),
      minTemp: this._transformTemperature(weather.temp[0].min.value),
      maxTemp: this._transformTemperature(weather.temp[1].max.value),
      description: weatherDescriptions[weatherCode]
    };
  }
  _transformTemperature(temp){
    if (temp > 0) {
      return `+${Math.round(temp)}`;
    } else {
      return Math.round(temp);
    }
  }


}
export default ClimacellService;
