function getAllDiplomas(req, res) {
    const { knex } = req.app.locals;
    knex
        .select('id', 'nombre')
        .from('diplomado')
        .where( { deleted: 0 } )
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error));
}

function getDiplomasByStudent(req, res) {
    const { knex } = req.app.locals;
    const { id } = req.params;

}

module.exports = {
    getAllDiplomas,
    getDiplomasByStudent
}