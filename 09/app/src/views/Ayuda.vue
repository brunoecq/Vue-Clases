<template>
  <div class="hello">
    AYUDA
    <HelloWorld msg="Esto es una importacion de componente"/>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";

export default {
    name: "AyudaPage",
    components: { HelloWorld }
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
