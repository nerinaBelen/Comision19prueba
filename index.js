const fs = require('fs');
const escribirJSON = function (data) {
    fs.writeFileSync("./data/cars.json", JSON.stringify(data), "utf-8")
}

const concesionaria = {
    autos: JSON.parse(fs.readFileSync("./data/cars.json", { encoding: 'utf-8' })),
    buscarAutos: function (patente) {
        let autoEncontrado = this.autos.find(function (auto) {
            return auto.patente === patente;

        });
        if (autoEncontrado === undefined) {
            return null;
        }
        return autoEncontrado;
    },

    venderAuto: function (patente) {
        let auto = this.buscarAutos(patente);
        if (auto !== null) {
            auto.vendido = true;
            escribirJSON(this.autos)
        }
    }
}

module.exports = concesionaria;