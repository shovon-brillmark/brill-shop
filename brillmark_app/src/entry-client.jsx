import ReactDOM from "react-dom";

import store from "./store/store";

import App from "./App";
import React from "react";

// Redux
import { Provider } from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>, 
    document.getElementById("app")
);
