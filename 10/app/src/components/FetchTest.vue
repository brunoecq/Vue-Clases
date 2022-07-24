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
      <br><br><br>

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
      <br><br><br>
      <button @click="deleteUsuario" class="btn btn-primary">Borrar</button>
      <br><br><br>
      <div class="card" v-for="usuario in usuarios" :key="usuario.id">
        <div class="card-body" @click="()=>{ (selected = usuario.id,actUsuario()) }"> 
          {{ usuario.name }} //////////// {{ usuario.avatar }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "FetchTest",
  props: {
    msg: String,
  },
  data() {
    return {
      usuarios: [],
      nuevoUsuario: "",
      selected: 0,
      nuevoavatar: ''
    };
  },
  methods: {
    async traerDatos() {
      //debugger;
      try {
        let rawData = await fetch(
          "https://62d8b1a29088313935937e1f.mockapi.io/api/users"
        );
        let jsonData = await rawData.json();
        this.usuarios = jsonData;
      } catch (error) {}
    },
    async agregarUsuario() {
      const usuarioData = {
        name: this.nuevoUsuario,
      };
      const options = {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuarioData),
      };
      let rawData = await fetch(
        "https://62d8b1a29088313935937e1f.mockapi.io/api/users",
        options
      );
      let jsonData = await rawData.json();
    },
    async actUsuario() {
      const usuarioData = {
        avatar: this.nuevoavatar,
      };
      const options = {
        method: "PUT",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuarioData),
      };
      let rawData = await fetch(
        `https://62d8b1a29088313935937e1f.mockapi.io/api/users/${this.selected}`,
        options
      );
      let jsonData = await rawData.json();
    },
    async deleteUsuario() {
      const options = {
        method: "DELETE",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      };
      let rawData = await fetch(
        `https://62d8b1a29088313935937e1f.mockapi.io/api/users/${this.selected}`,
        options
      );
      let jsonData = await rawData.json();
    }
  },
  destroyed() {
    const controller = new AbortController();

    // setTimeout(() => {
    //   controller.abort()
    // }, 5000);
    //}, 2000);

    ////debugger
    let self = this;
    fetch("https://62d8b1a29088313935937e1f.mockapi.io/api/users", {
      signal: controller.signal,
    })
      .then((response) => {
        //debugger;
        return response.json();
      })
      .then((json) => {
        ////debugger
        //throw new Error('hola')
        //json.forEach(element => { console.table(element) })
        self.usuarios = json;
      })
      .catch(
        (err) =>
          err.name == "AbortError"
            ? console.log(`${err}`) //Función o manejo de error
            : console.log(`${err}`) //Veo el error real
      )
      //.catch(err => console.error(`Ocurrió un error ${err}`))
      .finally((ok) =>
        console.log(`Esto se ejecuta obtengamos o no los datos`)
      );
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
