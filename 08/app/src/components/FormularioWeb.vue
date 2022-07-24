<template>
  <div class="container">
    <form action="">
      <div class="row">
        <div class="col col-12">
          <br /><br />
          <label for="inputNombre" class="text-start">Tu nombre</label>
          <input
            type="text"
            class="form-control"
            id="inputNombre"
            placeholder="Nombre completo"
            v-model="nombre"
          />
          <br />
          <p>
            Validar nombre:
            <span class="text-success fw-bold">{{ nombre }}</span>
          </p>

          <br />
          <label for="inputEdad" class="form-label text-start">Edad</label>
          <input
            type="number"
            class="form-control"
            id="inputEdad"
            placeholder="Edad"
          />
          <br />
          <label for="inputEmail" class="form-label text-start">Email</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            placeholder="tu@email.com"
          />
          <br />
          <div class="row">
            <h4>Selecciona tu curso</h4>
            <div class="col col-2">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="javascript"
                  id="javascript"
                  v-model="chequeados"
                />
                <label class="form-check-label" for="checkJS">
                  JavaScript
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkReact"
                  value="react"
                  v-model="chequeados"
                />
                <label class="form-check-label" for="checkReact"> React </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkNg"
                  value="angular"
                  v-model="chequeados"
                />
                <label class="form-check-label text-start" for="checkNg">
                  Angular
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkVue"
                  value="vue"
                  v-model="chequeados"
                />
                <label class="form-check-label" for="checkVue"> Vue </label>
              </div>
            </div>
          </div>
          <br />
          <p>
            Confirmados:
            <span class="text-success fw-bold">{{ chequeados }}</span>
          </p>
          <br />
          <label for="areaComentarios" class="form-label text-start"
            >Comentarios</label
          >
          <textarea
            class="form-control"
            id="areaComentarios"
            rows="3"
          ></textarea>
          <br />
          <label class="form-check-label">Pais</label>
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="pais"
          >
            <option selected></option>
            <option value="1">Uno</option>
            <option value="2">Dos</option>
            <option value="3">Tres</option>
          </select>
          <br />
          <p>
            Confirmados: <span class="text-success fw-bold">{{ pais }}</span>
          </p>
          <br />
          <br />
          <label class="form-check-label">Pais Dinamico</label>
          <select class="form-select" v-model="pais2">
            <option selected></option>
            <option
              v-for="pais in listaPaises"
              v-bind:value="pais.id"
              v-bind:key="pais.index"
            >
              {{ pais.pais }}
            </option>
          </select>
          <br />
          <p>
            Confirmados: <span class="text-success fw-bold">{{ pais2 }}</span>
          </p>
          <br /><br />
          <div class="row">
            <h4>Tipo de documento</h4>
            <div class="col">
              <input type="radio" name="checkDNI" class="form-check-input" />
              <label for="checkDNI">DNI</label>
            </div>
            <div class="col">
              <input type="radio" name="checkPass" class="form-check-input" />
              <label for="checkDNI">Pasaporte</label>
            </div>
            <div class="col">
              <input type="radio" name="checkVisa" class="form-check-input" />
              <label for="checkDNI">VISA</label>
            </div>
          </div>
          <hr />
          <div class="row">
            <br />
            <div class="col-10"></div>
            <br />
            <div class="col-2">
              <input type="submit" class="btn btn-primary" value="ENVIAR" />
            </div>
            <br />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormularioWeb",
  data() {
    return {
      nombre: "",
      chequeados: [],
      pais2: "",
      pais: "",
      listaPaises: [
        {
          id: "A",
          pais: "Argentina",
        },
        {
          id: "B",
          pais: "Uruguay",
        },
        {
          id: "C",
          pais: "Perú",
        },
        {
          id: "D",
          pais: "Colombia",
        },
      ],
    };
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
label {
  margin-left: 0.5em !important;
}
</style>
