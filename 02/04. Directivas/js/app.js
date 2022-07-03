var app = new Vue({
    el: '#app',
    data: {
        message: 'Nuevo mensaje',
        htmlCard: `<div class="card black white-text">
               <img width="200" src="images/pexels-yura-forrat-12507127.jpg"></div>`,
        portada: "images/pexels-josh-hild-12373451.jpg",
        descripcion: "Biopic de Steve Jobs basada en su libro biográfico.",
        alertMsg: 'mensaje de alerta',
        bidireccional: '',
        searchText: ''
    },
    methods: {
        lanzarAlerta() {
            alert(this.alertMsg)
        }
    }
})