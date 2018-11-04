module.exports = {
    sync: function (nombre) {
        return `Hola ${nombre}! Bienvenido a Node.js`;
    },
    withCallback: function (nombre, cb) {
        setTimeout(() => {
            console.log(cb(nombre))
        }, 5000);
    },
    withPromise: function (nombre) {
        console.log("Llamando función con promesa...");
        return new Promise((resolve, reject) => {
            console.log("Ejecutando espera...");
            setTimeout(() => {
                console.log("Resolviendo la espera!");
                resolve(nombre);
            }, 5000);
        })
    }
}