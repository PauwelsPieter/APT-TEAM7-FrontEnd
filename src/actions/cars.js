import MyApi from "../apis/my_api";

export const LOAD_ALL_CARS_SUCCESS = 'LOAD_ALL_CARS_SUCCESS';
export const LOAD_BRAND_COUNTRY_CARS_SUCCESS = 'LOAD_BRAND_COUNTRY_CARS_SUCCESS';
export const LOAD_MODEL_YEAR_CARS_SUCCESS = 'LOAD_MODEL_YEAR_CARS_SUCCESS';
export const LOAD_MODEL_TYPE_CARS_SUCCESS = 'LOAD_MODEL_TYPE_CARS_SUCCESS';

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

export function loadCars() {
    return (dispatch) => {
        return MyApi.getAllCars().then(
            (result) => {
                console.log('RESULT:',result);
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