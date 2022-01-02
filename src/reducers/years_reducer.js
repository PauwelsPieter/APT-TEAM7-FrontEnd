import { LOAD_YEARS_SUCCESS } from "../actions/years";

const years = (state = [], action) => {
    let newState = [...state];
    switch (action.type) {
        case LOAD_YEARS_SUCCESS:
            return action.years.sort();
        default:
            return newState;
    }
}
export default years;