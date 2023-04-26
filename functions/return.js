// Agregar una función que reciba por parámetro el título a buscar, 
// y me devuelva el titulo y la descripción encontrada, o un mensaje de "no se encontraron resultados" 
// en caso de que no se encuentre nada. Ejemplo function return

const fs = require("fs")

const buscar = (titulo) => {
    const tareas = fs.readFileSync("./data.json", "utf8")
    const tareaParsed = JSON.parse(tareas)
    const tareaBuscada = tareaParsed.find((tareaBuscada) => {
        return tareaBuscada.titulo === titulo;
    })
    if (!tareaBuscada) {
        return "no se encontraron resultados"
    }
    return tareaBuscada;
}

module.exports = { buscar }

//console.log(buscar("pasear perro"))