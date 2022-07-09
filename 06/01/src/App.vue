<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <ComponenteSimple :msg="mensaje"/>
  <componente-con-props :estudiante="manolo" :lista="nombres"/>
  <ComponenteWatcher />
</div>
</template>

<script>
import ComponenteSimple from './components/ComponenteSimple'
import ComponenteConProps from './components/ComponenteConProps'
import ComponenteWatcher from './components/ComponenteWatcher.vue'

export default {
  name: 'App',
  components: {
    ComponenteSimple,
    ComponenteConProps,
    ComponenteWatcher
},
  data() {
    return {
      mensaje: 'hola2',
      manolo: {
        nombre:'manuel',
        edad: 22
      },
      nombres: [ 'Luis', 'Lourdes', 'Mario']
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
