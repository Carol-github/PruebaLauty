//MICRODESAFIO 2

let Tareas=require("./funcionesDeTareas")  // con el require, estamos importando las tareas que modularizamos 
                                          //en el otro archivo: o sea FuncionesDeTareas


process.argv[2]  //aca tenemos el primer argumento pasado por terminal (despues del node y el nombre del archivo)

switch(process.argv[2]){ // lo que vamos a hacer con este condicional es tratar los diferentes valores que puede tomar el 
                           // argumento que nos pasen. 
case "listar":
    for (let i=0; i<Tareas.length; i++){
        console.log(Tareas[i].titulo+" : "+Tareas[i].estado)       // punto a     
    } 
    break;

case undefined:
    console.log("Atención, tienes que pasar una acción")        //punto B
    break;

default:
    console.log("No entiendo qué queres hacer")                 //punto c
    break;
}

