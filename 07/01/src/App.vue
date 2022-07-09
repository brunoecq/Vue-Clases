<template>
  <div id="app">
    <ThisComponente msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import ThisComponente from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    ThisComponente
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
</style>
