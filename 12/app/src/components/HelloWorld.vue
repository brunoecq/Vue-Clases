<template>
  <div>
    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto mt-16">
      <form>
        <div class="form-group mb-6">
          <label
            for="exampleInputEmail1"
            class="form-label inline-block mb-2 text-gray-700"
            >Msg</label
          >
          <input
            type="text"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Msg"
            v-model="localMsg"
          />
        </div>
        <div class="form-group mb-6">
          <label
            for="exampleInputPassword1"
            class="form-label inline-block mb-2 text-gray-700"
            >Nombre del Curso</label
          >
          <input
            type="text"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInputPassword1"
            placeholder="Nombre del Curso"
            v-model="localNombreDelCurso"
          />
        </div>
        <button
          type="button"
          class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          @click="
            () => {
              $store.dispatch('cambiarMsgAsync', localMsg);
              $store.dispatch(
                'cambiarNombreDelCursoAsync',
                localNombreDelCurso
              );
            }
          "
        >
          Actualizar
        </button>
      </form>
    </div>

    <div class="flex space-x-2 justify-center mt-16">
      <div>
        <h1
          class="text-5xl font-medium leading-tight text-gray-800 mb-2.5 mt-0"
        >
          {{ $store.state.msg }}
        </h1>
        <h2
          class="text-5xl font-medium leading-tight text-gray-800 mb-2.5 mt-0"
        >
          {{ $store.getters.getMsg }}
        </h2>
        <h3 class="text-4xl font-medium leading-tight text-gray-800 mb-2.5">
          {{ $store.state.nombreDelCurso }}
        </h3>
        <h4 class="text-4xl font-medium leading-tight text-gray-800 mb-2.5">
          {{ $store.getters.getConcatStates }}
        </h4>
        <h5 class="text-4xl font-medium leading-tight text-gray-800 mb-2.5">
          {{ $store.getters.getSucursales }}
        </h5>
        <h5 class="text-4xl font-medium leading-tight text-gray-800 mb-2.5">
          {{ $store.getters["sucursales/getSucursales"] }}
        </h5>

        <h5 class="text-4xl font-medium leading-tight text-gray-800 mb-2.5">
          {{ alerta }}
        </h5>
        <h5 class="text-4xl font-medium leading-tight text-gray-800 mb-2.5">
          {{ listado }}
        </h5>
        <h5 class="text-4xl font-medium leading-tight text-gray-800 mb-2.5">
          {{ profesion }}
        </h5>
        <h5 class="text-4xl font-medium leading-tight text-gray-800 mb-2.5">
          {{ profesionComputed }}
        </h5>
        <!-- <h5 class="text-4xl font-medium leading-tight text-gray-800 mb-2.5">
          profesionFour: {{ profesionFour }}
        </h5>
        <h5 class="text-4xl font-medium leading-tight text-gray-800 mb-2.5">
          profesionPlusLocalState: {{ profesionPlusLocalState }}
        </h5>
        <h5 class="text-4xl font-medium leading-tight text-gray-800 mb-2.5">
          profesionAlias: {{ profesionAlias }} 
        </h5> -->
        <h6 class="text-4xl font-medium leading-tight text-gray-800 mb-2.5">
          {{ count }}
        </h6>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
/* eslint-disable */
export default {
  name: "HelloWorld",
  data() {
    return {
      localMsg: "",
      localNombreDelCurso: "",
      otherVariable: " Hello",
    };
  },
  mounted() {
    let self = this;
    const setProductosEnStore = () => {
      axios.get("https://dummyjson.com/products").then((response) => {
        self.$store.commit("CONFIGURAR_PRODUCTOS", response.data.products);
      });
    };
    setProductosEnStore();
  },
  methods: {
    increment() {
      this.$store.commit("changeState", { count: this.count + 1 });
    },
    decrement() {
      this.$store.commit("changeState", { count: this.count - 1 });
    },
  },
  computed: {
    ...mapState("sucursales", ["listado", "alerta"]),
    ...mapState(["profesion"]),
    profesionComputed() {
      return `${this.$store.state.profesion}Computed`;
    },
    count() {
      return this.$store.state.count;
    },
  },
  // mapState({
  //   // arrow functions can make the code very succinct!
  //   profesionFour: (state) => state.profesion,

  //   // passing the string value 'profesion' is same as `state => state.profesion`
  //   profesionAlias: "profesion",

  //   // to access local state with `this`, a normal function must be used
  //   profesionPlusLocalState(state) {
  //     return state.profesion + this.otherVariable;
  //   },
  // }),
  props: {
    msg: String,
  },
};
</script>
