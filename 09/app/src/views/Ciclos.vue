<template>
  <div>
    <div class="hello">Ciclos</div>
    <h6>hola</h6>
  </div>
</template>

<script>
export default {
  name: "CiclosPage",
  data() {
    return {
      nombreAplicacion: "Nombre",
    };
  },
  beforeCreate: function() {
    console.log("En este momento del cicl, data no existe");
  },
  created: function() {
    console.log(
      "En este momento del ciclo, ya puedo acceder a data" +
        this.$data.nombreAplicacion
    );
  },
  beforeMount: function() {
    console.log(
      "En este momento del ciclo, data si existe pero lo que hagas no se vera en la pantalla."
    );
  },
  mounted: function() {
    console.log("En este momento del ciclo, data ya es reactiva");
    this.$nextTick(function() {
      console.log(this.$el.querySelector("h6"));
    });
  },
  beforeUpdate: function() {
    console.log("antes de actualizar");
  },
  updated: function() {
    console.log("Actualizacion realizada");
  },
  beforeUnMount: function() {
    console.log("Guarda estados o cambios");
  },
  destroyed: function() {
    console.log("Componente destruido");
  },
  methods: {
    cancelarEvento() {
      this.$destroy();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
