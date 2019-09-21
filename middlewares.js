function getIDAsInteger(req, res, next) { // ask doubts
    const { id } = req.params;
    if (Number.isInteger(+id)) {
        next();
    } else {
        return res.status(400).json('ID must be an ineteger.');
    }
}

module.exports = {
    getIDAsInteger
};