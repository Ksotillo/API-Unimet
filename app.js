const express  = require('express');
const app      = express();
const router   = express.Router();
const settings = require('./settings');
const routes = require('./routes')
const middlewares = require('./middlewares');

const knex = require('knex')({
    client: 'mysql',
    connection: settings.database
});
app.locals.knex = knex;

router.get('/students', routes.students.getAllStudents);
router.get('/students/:id', middlewares.getIDAsInteger, routes.students.getStudentByID);
router.get('/graduates', routes.graduates.getAllGraduates);
router.get('/graduates/:id', middlewares.getIDAsInteger, routes.graduates.getGraduateByID);
router.get('/companies', routes.companies.getAllCompanies);
router.get('/companies/:id', middlewares.getIDAsInteger, routes.companies.getCompanyByID);



router.get('/diplomas', routes.diplomas.getAllDiplomas);
router.get('/diplomas/student/:id', routes.diplomas.getDiplomasByStudent);
router.get('/companies/intership_offer', routes.companies.getCompaniesIntershipOfferAllowed);
router.get('/companies/thesis_offer', routes.companies.getCompaniesThesisOfferAllowed);
router.get('/companies/work_offer', routes.companies.getCompaniesWorkOfferAllowed);


app.use('/api', router);

app.listen(settings.APIServerPort, () => console.log(`🔥Server is listening on ${settings.APIServerPort}`));