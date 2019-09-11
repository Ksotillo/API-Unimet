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
                return res.status(200).json(data)
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
                    return res.status(200).json(data)
                } else {
                    return res.status(404).json(`Student with national ID ${id} not found`);
                }
            })
            .catch(error => res.status(500).json(error));
    }
}

module.exports = {
    getAllStudents,
    getStudentByID,
}