<template>
  <div class="ThisComponente">

    <span class="title">Quinto Componente </span>
    <span class="title">Mixins</span>

    <p>{{ mensajeDesdeMixin }}</p>
    <p>{{ otroMensaje }}</p>

    <button @click="globalAlert(otroMensaje)">Global Mixin</button>
  </div>
</template>

<script>
/* eslint-disable */
import myMixin1 from '../mixins/myMixin1'

export default {
  mixins: [myMixin1],
  name: 'QuintoComponente',
  data(){
    return {
      otroMensaje: 'Vengo desde el componente'
    }
  }
}
</script>

<style scoped>
.ThisComponente {
  box-shadow: 2px 5px 5px gray;
  border: 1px solid gray;
  background-color: rgb(255, 140, 197);
  display:block;
}

</style>
