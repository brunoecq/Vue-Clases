<template>
  <div class="hello">
    <h1>{{ $store.state.msg }}</h1>
    <h1>Carrito</h1>
    <ul>
      <li v-for="(item, index) in $store.state.carrito" :key="index">
        {{ item.name }} - {{ item.cantidadCarrito}}
      </li>
    </ul>
    <h1>Productos</h1>
    <ul>
      <li
        v-for="(item, index) in $store.state.products"
        :key="index"
        @click="agregarProductoAlCarrito(item)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {
    agregarProductoAlCarrito(payload) {
      let o = { ...payload, cantidadCarrito: 1 };
      this.$store.commit("agregarAlCarrito", o);
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
