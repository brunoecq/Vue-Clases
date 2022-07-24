<template>
  <div class="hello">
    <h1 @click="emitEvent"> {{ msg }}</h1>
  </div>
</template>

<script>
import { bus } from '@/bus'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    emitEvent(){
      bus.$emit('recibirEvento', 12312)
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
