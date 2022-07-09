<template>
  <div class="ThisComponente">
    <span class="title">Primer Componente</span>
    <span class="title">$el,$props,$data,$options,$refs,$attrs</span>
    <h1>{{ msg }}</h1>
    <h2>{{ this.root }}</h2>
    <h3 ref="customref">Aqui uso el ref </h3>
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    </label>
  </div>
</template>

<script>
export default {
  name: 'ThisComponente',
  inheritAttrs: false,
  props: {
    msg: String,
    label: String,
    value: String
  },
  opcionPersonalizada1:{
    key: 'ValorPersonalizado'
  },
  opcionPersonalizada2(){
    console.info(`Esto viene de la funcion Options2`)
  },
  data(){
    return {
      root: null,
      texto: '',
      bandera: 'Uzbekistan'
    }
  },
  mounted: function(){
    /* eslint-disable*/
    //debugger
    this.root = this.$el
    console.info(`El elemento raíz de este template, es: ${this.$el}`)
    console.info(`Data: ${this.$data} ${this.$data.bandera}`)
    console.info(`Props: ${this.$props} ${this.$props.msg}`)
    //console.info(`Options: ${this.$options} ${this.$options.opcionPersonalizada1.key}`)
    //this.$options.opcionPersonalizada2();
    let self = this
    this.$nextTick(()=>{
      console.info(`Refs: ${self.$refs.customref} ${self.$refs.customref.innerHTML}`)
    })
    //debugger
    console.info(`Attrs: ${this.$attrs} ${this.$attrs.placeholder}`)
  }
}
</script>

<style scoped>
.ThisComponente{
  box-shadow: 2px 5px 5px gray;
  border: 1px solid gray;
}
</style>
