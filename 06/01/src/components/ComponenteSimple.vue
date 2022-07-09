<template>
  <div class="cuadrado">
       <h1>ComponenteSimple</h1>
       <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: "ComponenteSimple",
  props: ['msg']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cuadrado {
  width: 500px;
  height: 500px;
  background-color: red;
  color: white;
}
</style>
