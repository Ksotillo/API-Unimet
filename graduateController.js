function getAllGraduates(req, res) {
    const { knex } = req.app.locals;
    knex
        .select('nombre', 'apellido', 'cedula', 'numero_carnet' ,'fecha_nacimiento', 'nacionalidad', 'email')
        .from('egresado')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error));
}

function getGraduateByID(req, res) {
    const { knex } = req.app.locals;
    const { id } = req.params;

    if ( id.toString().length > 8 ) {// carnet
        knex
        .select('nombre', 'apellido', 'cedula', 'numero_carnet', 'fecha_nacimiento', 'nacionalidad', 'email')
        .from('egresado')
        .where( { numero_carnet: `${id}` } )
        .then(data => {
            if (data.length > 0) {
                return res.status(200).json(data[0])
            } else {
                return res.status(404).json(`Graduate with student ID ${id} not found`);
            }
        })
        .catch(error => res.status(500).json(error));
    } else {// Cedula
        knex
            .select('nombre', 'apellido', 'cedula', 'numero_carnet', 'fecha_nacimiento', 'nacionalidad', 'email')
            .from('egresado')
            .where( { cedula: `${id}` } )
            .then(data => {
                if (data.length > 0) {
                    return res.status(200).json(data[0])
                } else {
                    return res.status(404).json(`Graduate with national ID ${id} not found`);
                }
            })
            .catch(error => res.status(500).json(error));
    }
}

module.exports = {
    getAllGraduates,
    getGraduateByID,
}