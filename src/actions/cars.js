import MyApi from "../apis/my_api";
import { toast } from "react-toastify";

export const LOAD_CARS_EMPTY = 'LOAD_CARS_EMPTY';
export const LOAD_ALL_CARS_SUCCESS = 'LOAD_ALL_CARS_SUCCESS';
export const LOAD_BRAND_COUNTRY_CARS_SUCCESS = 'LOAD_BRAND_COUNTRY_CARS_SUCCESS';
export const LOAD_MODEL_YEAR_CARS_SUCCESS = 'LOAD_MODEL_YEAR_CARS_SUCCESS';
export const LOAD_MODEL_TYPE_CARS_SUCCESS = 'LOAD_MODEL_TYPE_CARS_SUCCESS';
export const CREATE_BRAND_SUCCESS = 'CREATE_BRAND_SUCCESS';
export const EDIT_BRAND = 'EDIT_BRAND';
export const UPDATE_BRAND_SUCCESS = 'UPDATE_BRAND_SUCCESS';

export function loadCarsEmpty() {
    return { type: LOAD_CARS_EMPTY };
}

export function loadCarsSuccess(cars) {
    return { type: LOAD_ALL_CARS_SUCCESS, cars };
}

export function loadCarsByBrandCountrySuccess(cars) {
    return { type: LOAD_BRAND_COUNTRY_CARS_SUCCESS, cars };
}

export function loadCarsByModelYearSuccess(cars) {
    return { type: LOAD_MODEL_YEAR_CARS_SUCCESS, cars };
}

export function loadCarsByModelTypeSuccess(cars) {
    return { type: LOAD_MODEL_TYPE_CARS_SUCCESS, cars };
}

export function createBrandSuccess(brand) {
    return { type: CREATE_BRAND_SUCCESS, brand }
}

export function editBrand(brandId) {
    return { type: EDIT_BRAND, brandId }
}

export function updateBrandSuccess(brand) {
    return { type: UPDATE_BRAND_SUCCESS, brand }
}

export function loadCars() {
    return (dispatch) => {
        return MyApi.getAllCars().then(
            (result) => {
                dispatch(loadCarsSuccess(result.data));
            },
            (error) => {
                throw (error);
            }
        );
    };
}

export function loadCarsByBrandCountry(country) {
    return (dispatch) => {
        return MyApi.getCarsWhereBrandFromCountry(country).then(
            (result) => {
                dispatch(loadCarsByBrandCountrySuccess(result.data));
            },
            (error) => {
                throw (error);
            }
        );
    };
}

export function loadCarsByModelYear(year) {
    return (dispatch) => {
        return MyApi.getCarsWhereModelFromYear(year).then(
            (result) => {
                dispatch(loadCarsByModelYearSuccess(result.data));
            },
            (error) => {
                throw (error);
            }
        );
    };
}

export function loadCarsByModelType(type) {
    return (dispatch) => {
        return MyApi.getCarsWhereModelFromType(type).then(
            (result) => {
                dispatch(loadCarsByModelTypeSuccess(result.data));
            },
            (error) => {
                throw (error);
            }
        );
    };
}

export function createBrand(brand) {
    return (dispatch) => {
        const response = toast.promise(
            MyApi.createBrand(brand).then(
            (result) => {
                dispatch(createBrandSuccess(result.data));
            },
            (error) => {
                throw (error);
            }),
            {
                pending: 'Creating brand',
                success: 'Brand created',
                error: 'Failed'
            }
        );
        return response;
    };
}

export function updateBrand(brand) {
    return (dispatch) => {
        const response = toast.promise(
            MyApi.updateBrand(brand).then(
                (result) => {
                    dispatch(updateBrandSuccess(brand));
                },
                (error) => {
                    throw (error);
                }
            ),
            {
                pending: 'Updating brand',
                success: 'Brand updated',
                error: 'Failed'
            }
        );
        return response;
    };
}

export function deleteModel(modelId) {
    return (dispatch) => {
        const response = toast.promise(
            MyApi.deleteModel(modelId).then(
                (result) => {
                    dispatch(loadCars());
                },
                (error) => {
                    throw (error);
                }
            ),
            {
                pending: 'Deleting model',
                success: 'Model deleted',
                error: 'Failed'
            }
        );
        return response;
    };
}