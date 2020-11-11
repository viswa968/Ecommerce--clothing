import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

// middlwares is an array.

const middlewares = [logger];
// ...applymiddlewares gives all the methods of the logger to the middlewares to  be used.
const store= createStore(rootReducer, applyMiddleware(...middlewares))

export default store;
