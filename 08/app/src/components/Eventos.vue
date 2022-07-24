<template>
  <div class="container">
    <div>
        <h3>without stop propagation</h3>
        <div @click="elClick($event)">
            <button @click="elClick($event)">Click Me</button>
        </div>
        <h3>with stop propagation</h3>
        <div @click="elClick($event)">
            <button @click.stop="elClick($event)">Click Me</button>
        </div>
    </div>
    <hr> 
    <hr>
    <div>
        <h3>prevent</h3>
        <form action="" @submit.prevent="onsubmit">
          <input type="text">
          <input type="submit" value="Prevent">
        </form>
    </div>
    <hr> 
    <hr>
    <div>
        <h3>capture</h3>
       <div @click.capture="onsubmit" style="width:120px; height:120px;background-color: red;">
          <div @click="onsubmit" style="width:100px; height:100px;background-color: blue;"></div>
       </div>
    </div>
    <hr> 
    <hr>
    <div>
        <h3>self</h3>
       <div @click.self="onsubmit" style="width:120px; height:120px;background-color: red;">
          <div @click="onsubmit" style="width:100px; height:100px;background-color: blue;"></div>
       </div>
    </div>
        <hr> 
    <hr>
    <div>
        <h3>one</h3>
       <div @click.once="onsubmit" style="width:120px; height:120px;background-color: green;">
       </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "FormularioWeb",
  data() {
    return {}
  },
  methods: {
    elClick: function(event) {
      alert("Click from "+event.target.tagName+"\nCurrent Target: "+event.currentTarget.tagName);
    },
    onsubmit(){
      alert('submit')
    }
        
  }
};
</script>

<style scoped>
a {
  color: #42b983;
}
label {
  margin-left: 0.5em !important;
}
</style>
