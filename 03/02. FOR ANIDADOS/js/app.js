var app = new Vue({
    el: '#app',
    data: {
           tareas: [{id: 1, desc: "Revisar hardware faltante"},
            {id: 2, desc: "Validar user testing"},
            {id: 3, desc: "Verificar versión del S.O."},
            {id: 4, desc: "Instalar S.O. en SD-Card"},
            {id: 5, desc: "Realizar downgrade de S.O."},
            {id: 6, desc: "Instalar Office beta"}],
            private: {
                folders : [{
                    name : 'folder1',
                    checks : [
                      { name : 'check1.1' },
                      { name : 'check1.2' }
                    ]
                  },
                  {
                    name : 'folder2',
                    checks : [
                      { name : 'check2.1' },
                      { name : 'check2.2' }
                    ]
                  }
                ]
            }            

    }
})