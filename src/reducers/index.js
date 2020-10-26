import { combineReducers  } from 'redux';
import hourlyReducer from './hourly-reducer';
import dailyReducer from './daily-reducer';
import dateReducer from './date-reducer';


const rootReducer = combineReducers({
  hourlyWeather: hourlyReducer,
  dailyWeather: dailyReducer,
  date: dateReducer
})

export default rootReducer;
