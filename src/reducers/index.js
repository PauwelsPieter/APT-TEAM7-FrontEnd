import { combineReducers } from 'redux';

import cars from './cars_reducer';
import countries from './countries_reducer';
import years from './years_reducer';
import types from './types_reducer'

const reducers = combineReducers({
   cars,
   countries,
   years,
   types
});
export default reducers;