const router = require('express').Router();
const{allAlumnos, newAlumno} = require('../controllers/alumno.controllers');

//Ruta y controlador para enlistar a todos los Alumnos
router.get('/alumnos/allAlum', allAlumnos);
//Ruta y controlador para crear nuevo perfil de Alumno
router.post('/alumnos/newAlum', newAlumno);

module.exports = router;