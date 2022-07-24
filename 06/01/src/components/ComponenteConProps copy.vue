<template>
  <div class="mytext">
    Este es mi nuevo texto de prueba // ComponenteConProps // ComponenteConProps
    <br />
    {{ estudiante }}
    <div>
      {{ nombreCompleto}}
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponenteConProps",
  props: {
    estudiante: Object
  },
  data() {
    return {
      nombre: '',
      apellido: '',
      names: []
    }
  },
  computed: {
    nombreCompleto: {
      get: function() {
        return "Coder " + "House " + this.estudiante?.nombre;
      },
      set: function (nuevoValor) {
        this.names = nuevoValor.split(" ");
        this.nombre = this.names[0];
        this.apellido = this.names[1];
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mytext {
  font-size: 20px;
  font-weight: bold;
  color: blue;
  text-shadow: 1px 1px 1px brown;
}
</style>
