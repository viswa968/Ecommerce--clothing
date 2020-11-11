import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
    currentUser: null
}



const userReducer = (state =INITIAL_STATE,action) => {
    // state is received from Reducer store.
    // whenever action is initited. data changes .
    //  Hence, component is rendered and state is updated.
    switch(action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser:action.payload
            };
        

        // every action tat is fired, will come to every reduce. 
        // Inspite of that action not being related to the user.
        // Hence, for the unrelated actions, we need to put up a return statement, whcih returns the previous state.
        default:
            return state;
    }
}

export default userReducer;