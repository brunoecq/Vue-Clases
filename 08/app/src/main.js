import Vue from "vue";
import App from "./App.vue";
import VueForm from "vue-form";

Vue.config.productionTip = false;

Vue.use(VueForm, {
  inputClasses: {
    valid: "form-control-success",
    invalid: "form-control-danger",
  },
  validators: {
    matches: function (value, attrValue) {
      if (!attrValue) {
        return true;
      }
      return value === attrValue;
    },
    "password-strength": function (value) {
      return /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
        value
      );
    },
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
