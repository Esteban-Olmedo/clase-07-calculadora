const { list } = require("./list")

function find(param) {
    const titulos = list()
    return titulos.includes(param)
}

module.exports = { find }

// const { tasks } = require("../tasksData");

// function find(param) {
//   return tasks.find((tarea) => tarea.titulo === param);
// }

module.exports = { find };