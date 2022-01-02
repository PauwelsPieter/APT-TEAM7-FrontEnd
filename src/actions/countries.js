import MyApi from "../apis/my_api";

export const LOAD_COUNTRIES_SUCCESS = 'LOAD_COUNTRIES_SUCCESS';

export function loadCountriesSuccess(countries) {
    return { type: LOAD_COUNTRIES_SUCCESS, countries };
}

export function loadCountries() {
    return (dispatch) => {
        return MyApi.getCountries().then(
            (result) => {
                dispatch(loadCountriesSuccess(result.data));
            },
            (error) => {
                throw (error);
            }
        );
    };
}