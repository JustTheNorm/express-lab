const express = require('express')

const app = express()

const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get(`/greeting/:name`, (req, res)=>{
   const {name}= req.params
    res.send(`Hello, ${name} Great to see you!`)
    
})

app.get(`/tip/:total/:tipPercentage`, (req,res)=>{
    const {total, tipPercentage} = req.params
    const totalTip = ( parseInt(total) * parseInt(tipPercentage)/100)
    const final = parseInt(total) + parseInt(totalTip)
    res.send(`Bill: $${total}<br>Tip percentage: ${tipPercentage}% <br>Total tip: $${totalTip} <br> Your final total is: $${final}` )
})

app.get(`/magic/:question`, (req,res)=> {
    const {question} = req.params
    let i = Math.floor(Math.random() * answers.length)
    res.send(`Question: ${question}<br> Answer: ${answers[i]}`)
})

app.listen(3000, () => {
    console.log(`Server running on port: ${3000}`);
})