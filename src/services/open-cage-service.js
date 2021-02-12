import axios from 'axios'

class OpenCageService {
  constructor(){
    this.apiURL = 'https://api.opencagedata.com/geocode/v1/json';
    this.apiKey = '2e09777b70ff41898ef26af3a397055d';
  }

  async forwardGeocoding(city){
    const requestUrl = this.apiURL
      + '?'
      + 'key=' + this.apiKey
      + '&q=' + city
    try {
      const res = await axios.get(requestUrl);
      console.log(res.data);
      return this._transformApiDataToCoordinates(res.data);
    } catch (e) {
      console.log(e);
        return e;
    }
  }

  _transformApiDataToCoordinates(data){
    return {
      lat: data.results[0].geometry.lat,
      lon: data.results[0].geometry.lng
    };
  }
}
export default OpenCageService;
