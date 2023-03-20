import { applyMiddleware,legacy_createStore as createStore } from "redux";
import rootReducers from './index';
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(rootReducers,applyMiddleware(thunk,logger))

export default store