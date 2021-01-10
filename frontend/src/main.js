import "font-awesome/css/font-awesome.css";
import Vue from "vue";

import App from "./App";

import "./config/bootstrap";
import './config/msgs'
import store from "./config/store";
import router from "./config/router";

Vue.config.productionTip = false;

// TEMPORARIO!
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibm9tZSI6IlZpbmljaXVzIE9saXZlaXJhIiwiZW1haWwiOiJ2aW5pY2l1c0Brbm93bGVkZ2UuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTYxMDI5NTc5OSwiZXhwIjoxNjEwMzgyMTk5fQ.YOPA33H2xGEFFPGuFMEFZzgc9E2KfVma3vr2pPndgtc";
require("axios").defaults.headers.common["Authorization"] = `bearer ${token}`;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
