<template>
  <div class="hello">
    <button @click="llamarAMutation">Llamar a la mutation</button>
    <input type="text" v-model="mensaje" />
    <hr />
    <hr />
    <button @click="llamarAActionDesdeTimeout">
      Llamar a un action desde TimeOut
    </button>
    <input type="text" v-model="mensaje" />
    <hr />
    <hr />
    <button @click="llamarAAction">Llamar a un action desdeA PI</button>
    <input type="text" v-model="mensaje2" />
  </div>
</template>

<script>
export default {
  name: "VuexComponent",
  data() {
    return {
      mensaje: "",
      mensaje2: "",
    };
  },
  props: {},
  methods: {
    llamarAMutation() {
      this.$store.commit("cambiarMensaje", this.mensaje);
    },
    llamarAActionDesdeTimeout() {
      this.$store.dispatch("cambiarMensajeDesdeTimeOut", this.mensaje);
    },
    llamarAAction() {
      this.$store.dispatch("cambiarMensajeDesdeApi", this.mensaje2);
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
