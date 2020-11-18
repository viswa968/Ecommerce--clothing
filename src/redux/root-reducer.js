// this is the reducer which combines all the reducers.
// combineReducers is a reducx func, which helps in combing al local reducers.
import { combineReducers } from 'redux';
import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';


export default combineReducers({
    user: userReducer,
    cart:cartReducer
})

