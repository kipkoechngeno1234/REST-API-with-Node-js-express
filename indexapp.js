  // Import the Joi module for input validation and Use the express.json() middleware to parse incoming JSON requests and make the data available in req.body.
const Joi = require('joi');
  // Import the Express module and create an instance of the Express application.
const express = require('express');
 // Create an instance of the Express application.
const app = express();
  // Use the express.json() middleware to parse incoming JSON requests and make the data available in req.body.
app.use(express.json());


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
   // Find the course with the given ID in the courses array using the find() method. If a course with the specified ID is found, it will be returned; otherwise, undefined will be returned.
  const course = courses.find(c => c.id === parseInt(req.params.id));

  if (!course) res.status(404).send('The course with the given ID was not found.');
  res.send(course);
});



  //HTTP POST Method
app.post('/api/courses', (req, res) => {
  // Define a Joi schema to validate the input data for creating a new course. The schema specifies that the name property must be a string with a minimum length of 3 characters and is required.
  const schema = {
    name: Joi.string().min(3).required()
  };
   // Validate the incoming request data against the defined schema using Joi.validate(). If the validation fails, an error object will be returned, which can be used to send an appropriate response to the client.
  const result = Joi.validate(req.body, schema);
  // Return 400 if the course with the given ID was not found(object not found).
  if (result.error) { res.status(400).send(result.error.details[0].message);
  res.send(course);
}

  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
    // Add the new course to the courses array and return the newly created course to the client.
  courses.push(course);
    // Return the newly created course to the client.
  res.send(course);
}); 

const port = process.env.PORT || 3000;