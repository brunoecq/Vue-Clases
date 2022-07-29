<template>
  <div>
    <h1>ERES ADMIN - Editar</h1>

    <h2>{{ product?.title}}</h2>
    <input type="text" name="product" v-model="product.price" /> 
    <button @click="ActualizarProducto">Actualizar</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "EditarPage",
  data() {
    return {
      product: {
        title: '',
        price: 0
      }
    };
  },
  async mounted() {
    /*eslint-disable*/
    debugger;

    let isLogged = localStorage.getItem("isLogged");
    let isAdmin = localStorage.getItem("isAdmin");

    if (isLogged != "true") {
      this.$router.push("/login");
    }

    if (isAdmin != "true") {
      this.$router.push("/main");
    }
    let paramId = this.$route.params.id
    let resp = await axios.get(
      "https://62d8b1a29088313935937e1f.mockapi.io/api/products/" + paramId
    );
    this.product = resp.data;
  },
  methods: {
    async ActualizarProducto() {
debugger
      let resp = await axios.put(
        "https://62d8b1a29088313935937e1f.mockapi.io/api/products/" + this.$route.params.id,
        this.product
      );
      alert('Actualce mi producto')
    },
  }
};
</script>
>
