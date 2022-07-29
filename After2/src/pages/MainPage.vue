<template>
  <div>
    <ul>
      <li v-for="(item, index) in products" :key="index">{{ item.title }}</li>
    </ul>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: "MainPage",
  data(){
    return {
        products: [],
    }
  },
  async mounted() {
    /*eslint-disable*/
    debugger;

    let isLogged = localStorage.getItem("isLogged");

    if (isLogged != "true") {
      this.$router.push("/login");
    }

    let resp = await axios.get(
      "https://62d8b1a29088313935937e1f.mockapi.io/api/products"
    );
    this.products = resp.data;
  },
};
</script>
