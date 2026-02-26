const express = require('express');
const app = express();

//HTPP Method

const courses = [
  { id: 1, name: 'Web Development' },
  { id: 2, name: 'Full Stack Development' },
  { id: 3, name: 'Backend Development' }
];

  // GET HTTP Method 
app.get('/', (req, res) => {
    res.send('The wolrd is a better place with REST-API, NodeJS + ExpressJS');
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