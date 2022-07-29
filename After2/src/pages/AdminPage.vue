<template>
  <div>
    <h1>ERES ADMIN</h1>

    <table>
      <tr
        v-for="(item, index) in products"
        :key="index"
      >
        <td>{{ item.title }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.amount }}</td>
        <td @click="editarProducto(item.id)">Editar</td>
      </tr>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AdminPage",
  data() {
    return {
      products: [],
      selected: 0,
    };
  },
  methods: {
    editarProducto(payload) {
      /*eslint-disable*/
      debugger
      this.$router.push({ name: "editar", params: { id: payload } });
    },
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
    let resp = await axios.get(
      "https://62d8b1a29088313935937e1f.mockapi.io/api/products"
    );
    this.products = resp.data;
  },
};
</script>
