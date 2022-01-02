import MyApi from "../apis/my_api";

export const LOAD_YEARS_SUCCESS = 'LOAD_YEARS_SUCCESS';

export function loadYearsSuccess(years) {
    return { type: LOAD_YEARS_SUCCESS, years };
}

export function loadYears() {
    return (dispatch) => {
        return MyApi.getYears().then(
            (result) => {
                dispatch(loadYearsSuccess(result.data));
            },
            (error) => {
                throw (error);
            }
        );
    };
}