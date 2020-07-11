import counteReducer from "./reducer/countReducer";
import { createStore } from "redux";

const store = createStore(
  counteReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
