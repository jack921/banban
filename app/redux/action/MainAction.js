import * as types from '../constants/MainTypes';

export function initNavigate(navigate) {
    return {
        type: types.MAIN_TYPE,
        navigate: navigate,
    }
}