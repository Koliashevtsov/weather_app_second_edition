import { combineReducers  } from 'redux';
import hourlyReducer from './hourly-reducer';
import dailyReducer from './daily-reducer';
import dateReducer from './date-reducer';
import placeReducer from './place-reducer';


const rootReducer = combineReducers({
  hourlyWeather: hourlyReducer,
  dailyWeather: dailyReducer,
  date: dateReducer,
  place: placeReducer
})

export default rootReducer;
