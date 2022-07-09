<template>
  <div class="ThisComponente">
    <span class="title">Primer Componente</span>
    <span class="title">$el,$props,$data,$options,$refs,$attrs</span>
    <h1>{{ msg }}</h1>
    <h2>{{ this.root }}</h2>
  </div>
</template>

<script>
export default {
  name: 'ThisComponente',
  props: {
    msg: String,
  },
  opcionPersonalizada1:{
    key: 'value'
  },
  opcionPersonalizada2(){
    alert('soy algo nuevo')
  },
  data(){
    return {
      root: null
    }
  },
  mounted(){
    this.root = this.$el
    console.info(`El elemento raíz de este template, es: ${this.$el}`)
  }
}
</script>

<style scoped>
.ThisComponente{
  box-shadow: 2px 5px 5px gray;
  border: 1px solid gray;
}
</style>
