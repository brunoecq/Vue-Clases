
// Promises

const prom = Promise.resolve(7)

prom.then(y => y * 3)
    .then(y => (console.log(y),y)) 
    .then(y => y * 10)
    .then(y => console.log(y)) 
    .then(y => console.warn("Aqui si se ve"))
    .then(y => Promise.reject("Error"))
    .then(y => console.warn("No se ve"))
    .catch(err => console.error("Aqui atrapa el error")); 