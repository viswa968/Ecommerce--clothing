// these are functions that return objects // specifically names for case

import { UserActionTypes } from "./user.types";


export const setCurrentUser = user => ({
    type:'SET_CURRENT_USER',
    payload: user
});