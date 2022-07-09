<template>
  <div id="app">
    <ThisComponente v-model="username"
  required
  label='Label' value='Input'
  placeholder="Enter your username" class='rojo' msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import ThisComponente from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    ThisComponente
  },
  data(){
    return {
      username: ''
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
