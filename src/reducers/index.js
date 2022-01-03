import { combineReducers } from 'redux';

import carsLoading from './cars_loading_reducer';
import carsError from './cars_error_reducer';
import cars from './cars_reducer';
import countries from './countries_reducer';
import years from './years_reducer';
import types from './types_reducer'

const reducers = combineReducers({
   carsLoading,
   carsError,
   cars,
   countries,
   years,
   types
});
export default reducers;