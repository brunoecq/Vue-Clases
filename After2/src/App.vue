<template>
  <div id="app">
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Register</router-link>
    <router-link to="/main">Main</router-link>
    <router-link to="/admin">Admin</router-link>
    <a @click="desloguear">Desloguear</a>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
    };
  },
  methods: {
    desloguear(){
      localStorage.clear()
      this.$router.push('login')
    }
  }
};
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
