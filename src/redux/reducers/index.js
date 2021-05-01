import { coinReducer } from './coinReducer';
import { OtherReducer } from './otherReducer';
import { combineReducers } from 'redux';
export const Reducers = combineReducers({
  coinState: coinReducer,
  otherState: otherReducer
});