import { LOAD_CARS_ERROR } from "../actions/cars";

const carsError = (state = false, action) => {
    switch (action.type) {
        case LOAD_CARS_ERROR:
            return action.error;
        default:
            return state;
    }
}
export default carsError;