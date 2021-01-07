import Vue from "vue";

export const baseApiUrl = "http://localhost:3000";

export function showError(error) {
  if (error && error.response && error.response.data) {
    Vue.toasted.global.defaultError({ message: error.response.data });
  } else if (typeof error === "string") {
    Vue.toasted.global.defaultError({ message: error });
  } else {
    Vue.toasted.global.defaultError();
  }
}

// Alternativa 2: 
// export default { baseApiUrl, showError }