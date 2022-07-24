<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="traerDatos">Traer Datos</button>
    <div class="container">
      <div class="form-group">
        <label for="exampleInputEmail1">POST Nombre</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="usuario"
          v-model="nuevoUsuario"
        />
      </div>
      <button @click="agregarUsuario" class="btn btn-primary">Agregar</button>
      <br /><br /><br />

      <div class="form-group">
        <label for="exampleInputEmail1">PUT AVATAR /// {{ selected }}</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="avatar"
          v-model="nuevoavatar"
        />
      </div>
      <button @click="actUsuario" class="btn btn-primary">Actualizar</button>
      <br /><br /><br />
      <button @click="deleteUsuario" class="btn btn-primary">Borrar</button>
      <br /><br /><br />
      <div class="card" v-for="usuario in usuarios" :key="usuario.id">
        <div
          class="card-body"
          @click="
            () => {
              (selected = usuario.id), actUsuario();
            }
          "
        >
          {{ usuario.name }} //////////// {{ usuario.avatar }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "AxiosTest",
  props: {
    msg: String,
  },
  data() {
    return {
      usuarios: [],
      nuevoUsuario: "",
      selected: 0,
      nuevoavatar: "",
    };
  },
  methods: {
    async traerDatos() {
      //debugger;
      try {
        let rawData = await axios.get(
          "https://62d8b1a29088313935937e1f.mockapi.io/api/users"
        );
        this.usuarios = rawData.data;
      } catch (error) {}
    },
    async agregarUsuario() {
      const usuarioData = {
        name: this.nuevoUsuario,
      };
      let rawData = await axios.post(
        "https://62d8b1a29088313935937e1f.mockapi.io/api/users",
        usuarioData
      );
      let jsonData = await rawData.data;
    },
    async actUsuario() {
      const usuarioData = {
        avatar: this.nuevoavatar,
      };
      let rawData = await axios.put(
        `https://62d8b1a29088313935937e1f.mockapi.io/api/users/${this.selected}`,
        usuarioData
      );
      let jsonData = await rawData.data;
    },
    async deleteUsuario() {
      await axios.delete(
        `https://62d8b1a29088313935937e1f.mockapi.io/api/users/${this.selected}`,
      )
    },
  },
  destroyed() {
    let self = this;
    axios
      .get("https://62d8b1a29088313935937e1f.mockapi.io/api/users")
      .then((json) => {
        self.usuarios = json.data;
      })
      .catch((err) => console.log(`${err}`));
  },
};
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
