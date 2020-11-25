// requires npm-package express
const express = require('express')
// sets up server 
const app = express();

// sets first route-handler path to the root directory
app.get('/', (req, res) => { 
    // console.log(req);
    // res.send <h1> element
    res.send(`<h1>Hello World</h1>`)
})

// =================
// Greetings      //
// =================

// takes in /:name route-parameter
app.get('/greeting/:name', (req, res) => {
    // stores req.params into const name
    const name = req.params.name;
    // res.sends a <h1> element with const name inside template-literal
    res.send(`<h1>Hello ${name}...what are ya buying?</h1>`)
})



// default port 3000
app.listen(3000, () => {
    console.log("Listening on port 3000")
})