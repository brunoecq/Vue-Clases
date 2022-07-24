<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.jpg" width="100">
    <FormularioWeb v-if="current == 1" msg="Welcome to Your Vue.js App"/>
    <Eventos v-if="current == 2"/>
    <Entrada v-if="current == 3"/>
    <Clave v-if="current == 4"/>
    <Validaciones v-if="current == 5"/>
    <Watched v-if="current == 6"/>
    <VueFormExample v-if="current == 7"/>
    <VueFormExampleMatches v-if="current == 8"/>
  </div>
</template>

<script>
import FormularioWeb from './components/FormularioWeb.vue'
import Eventos from './components/Eventos.vue'
import Entrada from '@/components/Entrada.vue';
import Clave from '@/components/Clave.vue';
import Validaciones from '@/components/Validaciones.vue';
import Watched from './components/Watched.vue';
import VueFormExample from './components/VueFormExample.vue';
import VueFormExampleMatches from './components/VueFormExampleMatches.vue';


export default {
  name: 'App',
  components: {
    Eventos,
    FormularioWeb,
    Entrada,
    Clave,
    Validaciones,
    Watched,
    VueFormExample,
    VueFormExampleMatches
},
  data(){
    return {
      current: 8
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
