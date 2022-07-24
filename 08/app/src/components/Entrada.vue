<template>
  <div class="container">
    <div>
      <h3>Number</h3>
      <input
        type="number"
        class="form-control"
        id="inputEdad"
        placeholder="Edad"
        v-model.number="edad"
      />
    </div>
    <br />
    <p>
      Resultado: <span class="text-success fw-bold">{{ edad }}</span>
    </p>
    <br />
    <hr />
    <hr />
    <div>
      <h3>trim</h3>
      <textarea
        id="areaComentarios"
        rows="3"
        v-model.trim="comentario"
      ></textarea>
    </div>
    <br />
    <p>
      Resultado: <span class="text-success fw-bold">{{ comentario }}</span>
    </p>
    <br />
    <hr />
    <hr />
    <div>
      <h3>lazy</h3>
      <input type="text" placeholder="Nombre" v-model.lazy="nombre" />
    </div>
    <br />
    <p>
      Resultado: <span class="text-success fw-bold">{{ nombre }}</span>
    </p>
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
    return {
      edad: 0,
      comentario: "",
      nombre: "",
    };
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
