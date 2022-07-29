<template>
  <div class="hello">
    <button @click="traerData">Traer data desde Api</button>
    <input type="text" v-model="productId"/>
    <br>
    <br>
    <button @click="cambiarMensajeSinAsincronia">cambiarMensajeSinAsincronia</button>
    <input type="text" v-model="texto"/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorldDos',
  mounted(){
    this.$store.dispatch('getAllProducts')
  },
  data(){
    return {
      productId: 0,
      texto: ''
    }
  },
  methods:{
    traerData(){
      this.$store.dispatch('getProduct', this.productId)
    },
    cambiarMensajeSinAsincronia(){
      this.$store.commit('cambiarMensaje', this.texto)
    }
  } 
}
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
