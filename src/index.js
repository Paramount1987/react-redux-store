///////////////////////////////////////////
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
/////////////////////////////////////////////

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import {addLocaleData} from 'react-intl';
import ruLocaleData from 'react-intl/locale-data/ru';

addLocaleData(ruLocaleData);

import configureStore from "./store/configureStore";

import App from "./containers/app/App";
import ConnectedIntlProvider from "./components/IntlProvider/ConnectedIntlProvider";

const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
      <ConnectedIntlProvider>
          <App />
      </ConnectedIntlProvider>
  </Provider>,
  document.getElementById("root")
);
