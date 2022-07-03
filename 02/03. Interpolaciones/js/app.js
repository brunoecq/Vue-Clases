var app = new Vue({
    el: '#app',
    data: {
        a: 21,
        b: 3,
        message: 'Nuevo mensaje'
    },
    methods: {
        imprimirEnConsola() {
            console.log('Hola, coders!')
        },
        calculoMatematico() {
            return this.a * this.b
        }
    },
    computed: {
        duplicar() {
            this.imprimirEnConsola()
            return this.a * 2
        }
    }
})