export default {
  namespaced: true,
  state: {
    listado: ["CABA", "CÓRDOBA", "MONTEVIDEO", "LIMA", "LAS CONDES"],
    alerta: 'Maxima'
  },
  getters: {
    getSucursales: (state) => {
      return state.listado;
    },
  },
};
