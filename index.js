const Joi = require('joi');
const express = require('express');
const app = express();


app.use(express.json());

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);
}

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
    { id: 4, name: 'course4' },
    { id: 5, name: 'course5' },
    { id: 6, name: 'course6' },
    { id: 7, name: 'course7' },
    { id: 8, name: 'course8' },
    { id: 9, name: 'course9' },
    { id: 10, name: 'course10' },
    { id: 11, name: 'course11' },
    { id: 12, name: 'course12' },
    { id: 13, name: 'course13' },
    { id: 14, name: 'course14' },
    { id: 15, name: 'course15' },
    { id: 16, name: 'course16' },
    { id: 17, name: 'course17' },
    { id: 18, name: 'course18' },
    { id: 19, name: 'course19' },
    { id: 20, name: 'course20' },
    { id: 21, name: 'course21' },
    { id: 22, name: 'course22' },
    { id: 23, name: 'course23' },
    { id: 24, name: 'course24' },
    { id: 25, name: 'course25' },
    { id: 26, name: 'course26' },
    { id: 27, name: 'course27' },
    { id: 28, name: 'course28' },
    { id: 29, name: 'course29' },
    { id: 30, name: 'course30' },
    { id: 31, name: 'course31' },
    { id: 32, name: 'course32' },
    { id: 33, name: 'course33' },
    { id: 34, name: 'course34' },
    { id: 35, name: 'course35' },
    { id: 36, name: 'course36' },
    { id: 37, name: 'course37' },
    { id: 38, name: 'course38' },
    { id: 39, name: 'course39' },
    { id: 40, name: 'course40' },
    { id: 41, name: 'course41' },
    { id: 42, name: 'course42' },
    { id: 43, name: 'course43' },
    { id: 44, name: 'course44' },
    { id: 45, name: 'course45' },
    { id: 46, name: 'course46' },
    { id: 47, name: 'course47' },
    { id: 48, name: 'course48' },
    { id: 49, name: 'course49' },
    { id: 50, name: 'course50' }
  ];


app.get('/', (req, res) => {
    res.send('hello world')
});

app.get('/api/course', (req, res) => {
    res.send(courses)
});

app.post('/api/courses', (req, res) => {
    const result = validateCourse(req.body);

    if (result.error) {
        res.status(400).send(result.error);
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id'), (req, res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) res.status(404).send('The course is not here')
    res.send(course);

}
app.get('/api/course/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) res.status(404).send('The course is not here')
    res.send(course);

    const result = validateCourse(req.body);

    if (result.error) {
        res.status(400).send(result.error);
        return;
    }

    course.name = req.body.name
    res.send(course);


});

app.delete('/api/course/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));

    if (!course) {
        return res.status(404).send('The course is not here');
    }

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on port'))
