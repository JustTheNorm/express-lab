const express = require('express')

const app = express()

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

app.listen(3000, () => {
    console.log(`Server running on port: ${3000}`);
})