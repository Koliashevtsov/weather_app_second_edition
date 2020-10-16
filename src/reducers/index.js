import { combineReducers  } from 'redux';
import dayReducer from './day-reducer';
import weekReducer from './week-reducer';
import dateReducer from './date-reducer';


const rootReducer = combineReducers({
  dailyWeather: dayReducer,
  weeklyWeather: weekReducer,
  date: dateReducer
})

export default rootReducer;
