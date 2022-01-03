import { LOAD_CARS_LOADING } from "../actions/cars";

const carsLoading = (state = false, action) => {
    switch (action.type) {
        case LOAD_CARS_LOADING:
            return action.loading;
        default:
            return state;
    }
}
export default carsLoading;