const express = require ('express');

//creamos las rutas
const router = express.Router();

const cursosControlador = require('../controladores/cursosControlador');


module.exports =function (){


    
    //si vamos a agregar algo escribimos post, la ruta y el controlador
    router.post('/api/800/curso',

    cursosControlador.nuevoCurso
    
    );

    //obtener cursos de la base
     //Obtienes todos los registros
     router.get('/api/800cursos',
     cursosControlador.obtenerCursos
    );



    
return router;
}
