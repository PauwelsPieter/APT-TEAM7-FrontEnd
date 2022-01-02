import { LOAD_COUNTRIES_SUCCESS } from "../actions/countries";

const countries = (state = [], action) => {
    let newState = [...state];
    switch (action.type) {
        case LOAD_COUNTRIES_SUCCESS:
            return action.countries.sort();
        default:
            return newState;
    }
}
export default countries;