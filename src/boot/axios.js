import Vue from "vue";
import axios from "axios";
import { LocalStorage } from "quasar";

Vue.prototype.$axios = axios;
const token = LocalStorage.getItem("icare-token");
axios.defaults.headers.common["Authorization"] = "Bearer " + token;
