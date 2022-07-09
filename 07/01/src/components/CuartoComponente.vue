<template>
  <div class="ThisComponente">

    <span class="title">Cuarto Componente </span>
    <span class="title">Filtros</span>

    <p>{{ mensaje | capitalize }}</p>

    <div v-bind:id="rawId | formattedId">{{ rawId | formattedId(3) }}</div>

  </div>
</template>

<script>
export default {
  name: 'CuartoComponente',
  data(){
    return {
      mensaje: 'cAMINOS',
      rawId: 123.1232112
    }
  },
  filters: {
   capitalize: (value)=> {
     if (!value) return ''
     value = value.toString()
     return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
   }
 }
}
</script>

<style scoped>
.ThisComponente {
  box-shadow: 2px 5px 5px gray;
  border: 1px solid gray;
  background-color: rgb(222, 140, 255);
  display:block;
}

</style>
