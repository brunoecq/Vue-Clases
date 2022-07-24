<template>
  <div class="container">
    <div v-if="errors.length > 0">
      <p>Errores detectados:</p>
      <ul class="text-warning fw-bold">
        <li v-for="error in errors" v-bind:key="error.index">{{ error }}</li>
      </ul>
    </div>
    <form
      id="app"
      @submit="validarContenidoCargado"
      action="/accionPosteriorAvalidar"
      method="POST"
    >
      <label>Nombre:<input type="text" v-mode="nombre" /></label>
      <label>Email:<input type="text" v-mode="email" /></label>
      <label>Edad:<input type="text" v-mode="edad" /></label>
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "FormularioWeb",
  data() {
    return {
      nombre: "",
      email: "",
      edad: 0,
      errors: [],
    };
  },
  methods: {
    validarContenidoCargado(e) {
      if (this.nombre && this.edad && this.email) {
        return true;
      }
      if (this.nombre === "") {
        this.errors.push("El nombre es obligatorio.");
      }
      if (this.email === "") {
        this.errors.push("El correo electrónico es obligatorio.");
      }
      if (this.edad === 0) {
        this.errors.push("La edad debe ser mayor a 0 (cero).");
      }
      e.preventDefault();
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
