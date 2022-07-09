<template>
  <div class="ThisComponente">
    <span class="title">Segundo Componente</span>
    <span class="title">Emits</span>
    <h1>{{ texto }}</h1>
    <button @click="$emit('suma',5)">Incrementar</button>
  </div>
</template>

<script>
export default {
  name: 'SegundoComponente',
  inheritAttrs: false,
  props: ['texto'],
  data(){
    return {
      root: null,
      bandera: 'Uzbekistan'
    }
  }
}
</script>

<style scoped>
.ThisComponente {
  box-shadow: 2px 5px 5px gray;
  border: 1px solid gray;
  background-color: rgb(202, 243, 255);
}
</style>
