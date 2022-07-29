<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div v-if="current == 1">
      <BusHelloWorld msg="BusHelloWorld" />
      <BusOtherComponent msg="BusOtherComponent" />
    </div>
    <div v-if="current == 2">
      <SharedHelloWorld msg="SharedHelloWorld" />
      <SharedOtherComponent msg="SharedOtherComponent" />
    </div>
    <div v-if="current == 3">
      <VuexComponent />
      <VuexOtherComponent />
    </div>
  </div>
</template>

<script>
import BusHelloWorld from "./components/BusHelloWorld.vue";
import BusOtherComponent from "./components/BusOtherComponent.vue";
import SharedHelloWorld from "./components/SharedHelloWorld.vue";
import SharedOtherComponent from "./components/SharedOtherComponent.vue";
import VuexComponent from "./components/VuexComponent.vue";
import VuexOtherComponent from "./components/VuexOtherComponent.vue";

export default {
  name: "App",
  components: {
    BusHelloWorld,
    BusOtherComponent,
    SharedHelloWorld,
    SharedOtherComponent,
    VuexOtherComponent,
    VuexComponent
},
  data() {
    return {
      current: 3,
    };
  },
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
