import { LOAD_TYPES_SUCCESS } from "../actions/types";

const types = (state = [], action) => {
    let newState = [...state];
    switch (action.type) {
        case LOAD_TYPES_SUCCESS:
            return action.types.sort();
        default:
            return newState;
    }
}
export default types;