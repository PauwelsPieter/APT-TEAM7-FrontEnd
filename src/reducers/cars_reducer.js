import { LOAD_CARS_EMPTY, LOAD_ALL_CARS_SUCCESS, LOAD_BRAND_COUNTRY_CARS_SUCCESS, LOAD_MODEL_YEAR_CARS_SUCCESS, LOAD_MODEL_TYPE_CARS_SUCCESS, CREATE_BRAND_SUCCESS, EDIT_BRAND, UPDATE_BRAND_SUCCESS } from "../actions/cars";

const cars = (state = [], action) => {
    let newState = [...state];
    switch(action.type) {
        case LOAD_CARS_EMPTY:
            return [];
        case LOAD_ALL_CARS_SUCCESS:
            return action.cars;
        case LOAD_BRAND_COUNTRY_CARS_SUCCESS:
            return action.cars;
        case LOAD_MODEL_YEAR_CARS_SUCCESS:
            return action.cars;
        case LOAD_MODEL_TYPE_CARS_SUCCESS:
            return action.cars;
        case CREATE_BRAND_SUCCESS:
            action.brand.carModels = [];
            return [
                ...newState,
                action.brand
            ];
        case EDIT_BRAND:
            const indexOfBrandToEdit = newState.findIndex(brand => { return brand.id === action.brandId });
            newState[indexOfBrandToEdit].isEditing = true;
            return newState;
        case UPDATE_BRAND_SUCCESS:
            const indexOfBrandToUpdate = newState.findIndex(brand => { return brand.id === action.brand.id });
            newState[indexOfBrandToUpdate] = action.brand;
            newState[indexOfBrandToUpdate].isEditing = false;
            return newState;
        default:
            return newState;
    }
}
export default cars;