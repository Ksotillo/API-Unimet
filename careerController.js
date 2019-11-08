function getAllCareers(req, res) {
    const { knex } = req.app.locals;
    knex
        .select('id', 'nombre')
        .from('carrera')
        .where( { deleted: 0 } )
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error));
}

module.exports = {
    getAllCareers
}