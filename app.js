const express  = require('express');
const app      = express();
const router   = express.Router();
const settings = require('./settings');
const routes = require('./routes')

const knex = require('knex')({
    client: 'mysql',
    connection: settings.database
});
app.locals.knex = knex;

router.get('/students', routes.students.getAllStudents);
router.get('/students/:id', routes.students.getStudentByID);

app.use('/api', router);

app.listen(settings.APIServerPort, () => console.log(`🔥Server is listening on ${settings.APIServerPort}`));