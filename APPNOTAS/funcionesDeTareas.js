const fs=require("fs")  // este es el modulo que contiene la funcion para leer archivos.

let tareas=fs.readFileSync("./Tareas.json", "utf-8")  //readFileSync es una funcion del modulo fs que nos sirve para leer archivos. 
//toma 2 parametros, la dir del archivo json y el tipo de encoding

// console.log(tareas) para ver por terminal

let array=JSON.parse(tareas) // buscamos la funcion correspondiente para transformar una string con forma json a un array.

console.log(array) // aca imprimimos por pantalla las tareas existentes. ACA TERMINAMOS


//terminado microdesafio 1--------------------------------------------------------------------------------------------------------------

console.log(process.argv) // es un array de los argumentos, puedo acceder al array para agarrar los argumentos que me pasen.

module.exports=array
