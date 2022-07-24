<template>
  <div class="container">
      <label>Email:<input type="text" v-model.lazy="email" /></label>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "FormularioWeb",
  data() {
    return {
      email: "",
    };
  },
  watch:{
    email(nuevoValor){
      this.validarEmail(nuevoValor)
    }
  },
  methods: {
    validarEmail(value) {
      let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (emailRegex.test(value)) {
        alert('valido')
      } else {
        alert('invalido')
      }
    },
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
label {
  margin-left: 0.5em !important;
}
</style>
