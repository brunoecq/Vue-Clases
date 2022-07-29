<template>
  <b-form class="formulario">
    <label class="sr-only" for="inline-form-input-name">Usuario</label>
    <b-form-input
      v-model="usuario"
      id="inline-form-input-name"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Usuario"
    ></b-form-input>

    <label class="sr-only" for="inline-form-input-username">Password</label>
    <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
      <b-form-input
        v-model="password"
        id="inline-form-input-username"
        placeholder="password"
      ></b-form-input>
    </b-input-group>
    <label class="sr-only" for="inline-form-input-username">Mail</label>
    <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
      <b-form-input
        v-model="mail"
        id="inline-form-input-username"
        placeholder="mail"
      ></b-form-input>
    </b-input-group>

    <b-button @click="createUser" variant="primary">Login</b-button>
  </b-form>
</template>
<script>
import axios from "axios";
export default {
  name: " RegisterPage",
  data() {
    return {
      usuario: "",
      password: "",
      mail: "",
    };
  },
  methods: {
    async createUser() {
      const newUser = {
        name: this.usuario,
        password: this.password,
        email: this.mail,
        isAdmin: false,
      };
      let resp = await axios.post(
        "https://62d8b1a29088313935937e1f.mockapi.io/api/users",
        newUser
      );
      this.usuarios = resp.data;
      this.$router.push('/login')
    },
  },
};
</script>
