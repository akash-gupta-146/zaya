import { AGE_UP, AGE_DOWN } from './action-types' 

const initialState = {
    age : 21
};

const reducer = (state = initialState,action) => {
    const newState = {...state}
    switch(action){
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