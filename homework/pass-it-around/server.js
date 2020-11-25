// require express npm-package
const express = require('express')

// store in app 
const app = express()

// the home page 
app.get('/', (req, res) => {
    // starts at 98 
    res.send(`<h1>99 Bottles of beer on the wall</h1>
    <a href="/${98}">Take one down, pass it around</a>
    `);
})

// ===================================
// Take One Down and Pass It Around //
// ===================================

app.get('/:number_of_bottles', (req, res) => {
    const numBottles = parseInt(req.params.number_of_bottles);
    // decrements numBottles
    const oneLess = numBottles - 1;
    // template literal
    res.send(`<h1>${numBottles} Bottles of beer on the wall</h1>
    ${ numBottles === 0 ? `<a href="/">start over</a>` : `<a href="/${oneLess}">Take one down, pass it around</a>` }
    `);
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})