<template>
  <div class="hello">
    <h1 @click="cambiarMensaje"> {{ msg }}</h1>
    {{ store.state.mensaje }}
  </div>
</template>

<script>
/* eslint-disable */
import  {store}  from '@/shared'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      privateState: {},
      sharedState: store.state
    }
  },
  methods: {
    cambiarMensaje(){
      store.setAccionDelMensaje('cambiando mensaje')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
