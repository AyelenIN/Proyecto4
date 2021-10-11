const { model, Schema } = require('mongoose');

//Modelo de datos del Alumno
const alumnoSchema = new Schema({
    datosAlumno: {
        datosPersonales: {
            nombreCompleto: {
                type: String,
                required: true
            },
            fechaNacimiento: {
                type: Date,
                required: true
            },
            dniN: {
                type: String,
                required: true
            },
            nacionalidad: {
                pais: {
                    type: String,
                    required: true
                },
                provincia: {
                    type: String,
                    required: true
                },
                localidad:{
                    type: String,
                    required:true
                },
                ciudad: {
                    type: String,
                    required: true
                },
                codigoP: {
                    type: Number,
                    required: true
                }
            },
            domicilio: {
                calles: {
                    type: String,
                    required: true
                },
                alturaN: {
                    type: String,
                    required: true
                }
            },
        },
        datosContacto: {
            numeroTelefono: {
                type: Number,
                required: true
            },
            correoElectronico: {
                type: String,
                required: true
            }
        },
        nivelEducacion: {
            estudiosSecundarios: {
                completo: {
                    type: Boolean,
                    required: true
                },
                nombreInstitucion: String,
                fechaEgreso: Date,
            },
            estudiosUniversitarios: {
                universitarios: Array,
                terciarios: Array,
                cursos: Array
            }
        },
        profesionLaboral: {
            historialLaboral: {
                conocimientos: Array,
                habilidades: Array,
                trabajos: Array,
                referencias: Array
            }
        },
        preferenciasPersonales: {
            hobbies: Array,
            intereses: Array
        }
    },
    active: Boolean
});

module.exports = model('alumno', alumnoSchema);