// Redux
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import popupSaga from "./popup.saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({ reducer: rootReducer, middleware: [sagaMiddleware] });
sagaMiddleware.run(popupSaga);

export default store;