import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";

import usersReducer from "./features/users/usersSlice";

// add imports and code
import {createStore} from "redux"

const store = createStore(usersReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  // add imports and code
  <Provider store={store}>
    <App />
  </Provider>
  ,
  // add imports and code
  document.getElementById("root")
);
