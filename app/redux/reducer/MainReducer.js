import * as types from '../constants/MainTypes';

const initialState={
    navigate: null
}

export default function initNavigate(state=initialState,action){
    switch(action.type){
        case types.MAIN_TYPE:
            return{
                ...state,
                navigate: action.navigate,
            }
            break;
        default:
            return state;
    }
}

