const ctrlAlumnos = {};
const Alumno = require('../models/alumno.model');

//Listar perfiles de los Alumnos
ctrlAlumnos.allAlumnos = async (req, res) => {
    const alumnos = await Alumno.find({active: true})
    res.json(alumnos)
}

//Crear perfiles de Alumnos
ctrlAlumnos.newAlumno = async (req, res) => {
    const {datosAlumno} = req.body;
    const alumno = new Alumno({datosAlumno, active: true});
    await alumno.save()
    .then(() => res.json({
        message: 'Perfil de Alumno creado exitosamente!',
        alumno
    }))
    .catch((e) => {
        res.json({message: 'Error en la petición, intentelo nuevamente...'});
        console.log(e);
    })
}

module.exports = ctrlAlumnos;