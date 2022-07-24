<template>
  <div id="app">
    <FetchTest msg="Fetch" v-if="current == 1"/>
    <AxiosTest msg="Axios" v-if="current == 2"/>
  </div>
</template>

<script>

import FetchTest from '@/components/FetchTest'
import AxiosTest from './components/AxiosTest.vue'

export default {
  name: 'App',
  components: {
    FetchTest,
    AxiosTest
},
  data() {
    return {
      current: 2
    }
  },
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
