
function getAllStudents(req, res) {
    const { knex } = req.app.locals;
    knex
        .select('nombre', 'apellido', 'cedula', 'numero_carnet' ,'fecha_nacimiento', 'nacionalidad', 'email')
        .from('estudiante')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error));
}

function getStudentByID(req, res) {
    const { knex } = req.app.locals;
    const { id } = req.params;

    if ( id.toString().length > 8 ) {// carnet
        knex
        .select('nombre', 'apellido', 'cedula', 'numero_carnet', 'fecha_nacimiento', 'nacionalidad', 'email')
        .from('estudiante')
        .where( { numero_carnet: `${id}` } )
        .then(data => {
            if (data.length > 0) {
                return res.status(200).json(data[0])
            } else {
                return res.status(404).json(`Student with student ID ${id} not found`);
            }
        })
        .catch(error => res.status(500).json(error));
    } else {// Cedula
        knex
            .select('nombre', 'apellido', 'cedula', 'numero_carnet', 'fecha_nacimiento', 'nacionalidad', 'email')
            .from('estudiante')
            .where( { cedula: `${id}` } )
            .then(data => {
                if (data.length > 0) {
                    return res.status(200).json(data[0])
                } else {
                    return res.status(404).json(`Student with national ID ${id} not found`);
                }
            })
            .catch(error => res.status(500).json(error));
    }
}

function getStudentsByCareer(req, res) {
    const { knex } = req.app.locals;
    const { career } = req.params;

    knex
        .distinct()
        .select('e.nombre', 'e.apellido', 'e.cedula', 'e.numero_carnet' ,'e.fecha_nacimiento', 'e.nacionalidad', 'e.email', 'c.nombre as ' +  'carrera')
        .from('estudiante AS e')
        .innerJoin('carrera_detalle AS cd', 'cd.numero_carnet', 'e.numero_carnet')
        .innerJoin('carrera AS c', 'c.id', 'cd.carrera_id')
        .where('c.deleted', '=', 0)
        // .where('c.nombre', '=', 0)
        .then(data => {
            data = data.filter( d => d.carrera.replace(/\s/g, '').toLowerCase() == career.toLowerCase());
            if (data.length > 0) {
                res.status(200).json(data);
            } else {
                knex
                    .select('id', 'nombre')
                    .from('carrera')
                    .where( { deleted: 0 } )
                    .then(data => {
                        const careers = data
                        let options = '';
                        for (let i = 0; i < careers.length; i++) {
                            options += careers[i].nombre + "\n";
                        }
                        res.status(404).json(`No se ha enccontrado resultados para ${career}. Puedes intentar las siguiente opciones: \n ${options}`);
                    })
                    .catch(error => res.status(500).json(error));
            }
        })
        .catch(error => res.status(500).json(error));
}

module.exports = {
    getAllStudents,
    getStudentByID,
    getStudentsByCareer
}