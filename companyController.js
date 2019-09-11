function getAllCompanies(req, res) {
    const { knex } = req.app.locals;
    knex
        .select('nombre', 'rif', 'descripcion', 'numero_empleados' ,'url', 'telefono', 'email')
        .from('empresa')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error));
}

function getCompanyByID(req, res) {
    const { knex } = req.app.locals;
    const { id } = req.params;

    knex
        .select('nombre', 'rif', 'descripcion', 'numero_empleados' ,'url', 'telefono', 'email')
        .from('empresa')
        .where( { id: `${id}` } )
        .then(data => {
            if (data.length > 0) {
                return res.status(200).json(data[0])
            } else {
                return res.status(404).json(`The company with ID ${id} not found`);
            }
        })
        .catch(error => res.status(500).json(error));
}

module.exports = {
    getAllCompanies,
    getCompanyByID,
}