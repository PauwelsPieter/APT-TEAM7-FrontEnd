import { LOAD_ALL_CARS_SUCCESS, LOAD_BRAND_COUNTRY_CARS_SUCCESS, LOAD_MODEL_YEAR_CARS_SUCCESS, LOAD_MODEL_TYPE_CARS_SUCCESS } from "../actions/cars";

const cars = (state = [], action) => {
    let newState = [...state];
    switch(action.type) {
        case LOAD_ALL_CARS_SUCCESS:
            return action.cars;
        case LOAD_BRAND_COUNTRY_CARS_SUCCESS:
            return action.cars;
        case LOAD_MODEL_YEAR_CARS_SUCCESS:
            return action.cars;
        case LOAD_MODEL_TYPE_CARS_SUCCESS:
            return action.cars;
        default:
            return newState;
    }
}
export default cars;