import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import { items } from "../reducers/items";
import { locale } from "../reducers/locale";

const logger = createLogger();
const rootReducer = combineReducers({
  items,
  locale
});

const initialState = localStorage.getItem('reactReduxStat') ? JSON.parse(localStorage.getItem('reactReduxStat')) : {};

export default function configureStore() {
  let store;

  if (module.hot) {
    store = createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(thunkMiddleware, logger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
      )
    );
  } else {
    store = createStore(
      rootReducer,
      initialState,
      compose(applyMiddleware(thunkMiddleware), f => f)
    );
  }

  store.subscribe(()=>{
    localStorage.setItem('reactReduxStat', JSON.stringify(store.getState()))
  });

  return store;
}
