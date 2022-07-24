<template>
  <div class="container">
    <div>
      <h3>Vue Form Example</h3>
      <vue-form :state="formstate" @submit.prevent="onSubmit">
        <validate tag="label">
          <span>Nombre *</span>
          <input v-model="model.name" required name="name" />
          <field-messages name="name">
            <div>Correcto!</div>
            <div slot="required">Nombre es un campo requerido</div>
          </field-messages>
        </validate>
        <validate tag="label">
          <span>Email</span>
          <input v-model="model.email" name="email" type="email" required />
          <field-messages name="email">
            <div slot="required">Email es un campo requerido</div>
            <div slot="email">Email no es válido</div>
          </field-messages>
        </validate>
        <button type="submit">ENVIAR</button>
      </vue-form>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "VueFormExample",
  data() {
    return {
      formstate: {
        $error: {
          //campos con error
        },
        $submittedState: {
          //El formulario enviado         quedará clonado en       este objeto
        },
      },
      model: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    onSubmit: function () {
      if (this.formstate.$invalid) {
        // alertar al usuario
        //  por campos con valores
        //  no válidos
        debugger
        alert(this.formstate.$error)
        return;
      }
      //procesar y enviar        el Formulario
    },
  },
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
