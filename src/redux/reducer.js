import { AGE_UP, AGE_DOWN, SET_COURSE } from './action-types' 

const initialState = {
    age : 21
};

const reducer = (state = initialState,action) => {
    const newState = {...state}
    switch(action.type){
        case SET_COURSE:
            newState.course = action.course
            break;
        case AGE_UP:
            newState.age++;
            break;
        case AGE_DOWN:
            newState.age--;
            break;
        default: return newState
    }

    return newState;
}

export default reducer;