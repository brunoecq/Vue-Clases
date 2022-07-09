<template>
  <div class="ThisComponente">
    <span class="title">Tercer Componente</span>
    <span class="title">SLOTS</span>
    <slot></slot>
    <hr>
    <div class="slot_azul">
    <slot name="header" class="slot_rojo"></slot>
    </div>
    <hr>
    <div class="slot_azul">
      <slot name="main" ></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TercerComponente',
}
</script>

<style scoped>
.ThisComponente {
  box-shadow: 2px 5px 5px gray;
  border: 1px solid gray;
  background-color: rgb(213, 255, 202);
}

.slot_azul{
  color: blue;
}

.slot_rojo{
  color: red;
}
</style>
