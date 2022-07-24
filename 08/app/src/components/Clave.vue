<template>
  <div class="container">
    <div>
      <h3>Enter</h3>
      <br />
      <br />
      <input v-on:keyup.enter="enviarFormulario" value="Enter" />
      <br />
      <br />
      <input @keyup.alt.enter="enviarFormulario" value="Alt Enter" />
    </div>
    <br />
    <hr />
    <hr />
    <div>
      <h3>Teclas del Sistema</h3>
      <button @click.ctrl="enviarFormulario">Ctrl Click</button> <br />
      <br />
      <button @keyup.alt.s="enviarFormulario">Alt S</button>
    </div>
    <br />
    <hr />
    <hr />
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "FormularioWeb",
  data() {
    return {};
  },
  methods: {
    enviarFormulario() {
      alert("enviarFormulario");
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
