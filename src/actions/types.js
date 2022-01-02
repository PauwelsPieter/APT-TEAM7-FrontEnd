import MyApi from "../apis/my_api";

export const LOAD_TYPES_SUCCESS = 'LOAD_TYPES_SUCCESS';

export function loadTypesSuccess(types) {
    return { type: LOAD_TYPES_SUCCESS, types };
}

export function loadTypes() {
    return (dispatch) => {
        return MyApi.getTypes().then(
            (result) => {
                dispatch(loadTypesSuccess(result.data));
            },
            (error) => {
                throw (error);
            }
        );
    };
}