<template>
  <div class="cuadrado">
    <h1>Componente Con watcher</h1>
    <input type="text" v-model="question" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "ComponenteWatcher",
  data() {
    return {
      question: "inicial",
      message: "Static",
    };
  },
  watch: {
    question(_new, _old) {
      this.message = _old;
    },
  }
};
</script>

<style scoped></style>
