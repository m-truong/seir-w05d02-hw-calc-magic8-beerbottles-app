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

// ===============
// Tip Calculator //
// ===============

// 
app.get('/tip/:total/:tipPercentage', (req, res) => {
    // assign consts to :total and :tipPercentage
    const total = req.params.total; 
    const tipPercent = req.params.tipPercentage;
    const tip = total * (tipPercent/100)
    
    res.send(`<h1>${tip}</h1>`)

})

// ===============
// Magic 8 Ball //
// ===============

// should expect a String 
    // can URL param be any parameter? 
app.get('/magic/:question', (req, res) => {
    // store question param as const ques
    const ques = req.params.question;
    const magicArr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const answer = `${ques}, ${magicArr[Math.floor(Math.random()*magicArr.length)]}`
    res.send(`<h1>${answer}</h1>`)
})


// default port 3000
app.listen(3000, () => {
    console.log("Listening on port 3000")
})