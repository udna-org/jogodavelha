import { combineReducers } from 'redux';
import round from './round/reducer';
import theme from './theme/reducer';


export default combineReducers({
  round, 
  theme
})  