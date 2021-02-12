const intervals = [
  {id: 10, interval: '10:00-12:00', description: 'cloudly', temperature: '+18'},
  {id: 12, interval: '12:00-14:00', description: 'sunny', temperature: '+20'},
  {id: 14, interval: '14:00-16:00', description: 'sunny', temperature: '+21'},
  {id: 16, interval: '16:00-18:00', description: 'sunny', temperature: '+20'},
  {id: 18, interval: '18:00-20:00', description: 'cloudly', temperature: '+17'},
  {id: 20, interval: '20:00-22:00', description: 'cloudly', temperature: '+15'},
  {id: 22, interval: '22:00-00:00', description: 'cloudly', temperature: '+15'}
]
const days = [
  {
    date: '2020-10-06T18:42:11.144Z',
    minTemp: '+15',
    maxTemp: '+30',
    description: 'sunny'
  },
  {
    date: '2020-10-07T18:42:11.144Z',
    minTemp: '+16',
    maxTemp: '+31',
    description: 'sunny'
  },
  {
    date: '2020-08-29T20:09:14.193Z',
    minTemp: '+16',
    maxTemp: '+31',
    description: 'sunny'
  },
  {
    date: '2020-08-30T20:09:14.193Z',
    minTemp: '+17',
    maxTemp: '+30',
    description: 'sunny'
  },
  {
    date: '2020-08-31T20:09:14.193Z',
    minTemp: '+14',
    maxTemp: '+28',
    description: 'sunny'
  }
]

export default class FakeData {
  constructor(){
    this.day = intervals;
    this.week = days
  }
  getHourlyWeather(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.day)
      }, 700)
    });
  }

  getDailyWeather(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.week)
      }, 700)
    });
  }
}
