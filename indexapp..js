const express = require('express');
const app = express();

//HTPP Method

const courses = [
  { id: 1, name: 'Web Development' },
  { id: 2, name: 'Full Stack Development' },
  { id: 3, name: 'Backend Development' }
];

  // GET HTTP Method to return all courses
app.get('/api/courses', (req, res) => {
  res.send(courses);
});

   // GET HTTP Method with ID
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));

  // Return 404 if the course with the given ID was not found(object not found).
  if (!course) res.status(404).send('The course with the given ID was not found.');
  res.send(course);
});

  //POST HTTP Method
app.post('/api/courses', (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
}); 