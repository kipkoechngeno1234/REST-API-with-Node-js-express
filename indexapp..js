const express = require('express');
const app = express();

//HTPP Methods
app.get()
app.put()
app.post()
app.delete()

  // GET HTTP Method 
app.get('/', (req, res) => {
    res.send('The wolrd is a better place with REST-API, NodeJS + ExpressJS');
});