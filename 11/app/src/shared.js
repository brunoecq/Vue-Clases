export const store = {
    debug: true,
    state: {
       mensaje: "Hola coders!"
    },
    setAccionDelMensaje (newValue) {
      this.debug
      console.log('Método disparado con ', newValue)
      this.state.mensaje = newValue
    },
    limpiarAccioneDelMensaje () {
      this.debug
      console.log('Método disparado')
      this.state.mensaje = ''
    }
 }
 