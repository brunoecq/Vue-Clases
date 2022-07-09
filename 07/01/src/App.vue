<template>
  <div id="app">
    <PrimerComponente v-model="username" required label='Label' value='Input' placeholder="Enter your username" class='rojo' msg="Welcome to Your Vue.js App"/>
    <SegundoComponente :texto="propQueDebeCambiarDesdeElHijo" @suma="SumaEnElPadre" />
    <TercerComponente>
      <h1>H1 desde afuera</h1>
      <p slot="main">Encabezado principal</p>
    </TercerComponente>


  </div>
</template>

<script>
import PrimerComponente from './components/PrimerComponente.vue'
import SegundoComponente from './components/SegundoComponente.vue'
import TercerComponente from './components/TercerComponente.vue'

export default {
  name: 'App',
  components: {
    PrimerComponente,
    SegundoComponente,
    TercerComponente
  },
  data(){
    return {
      username: '',
      propQueDebeCambiarDesdeElHijo: 20
    }
  },
  methods: {
    SumaEnElPadre(payload){
      this.propQueDebeCambiarDesdeElHijo = this.propQueDebeCambiarDesdeElHijo + payload
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
.title{
  color:darkslategrey;
  text-shadow: 1px 2px 2px gray;
}
.rojo{
  color: #bf2626;
}
</style>
