const express = require('express')

const app = express()

app.get(`/greeting/:name`, (req, res)=>{
   const {name}= req.params
    res.send(`Hello, ${name} Great to see you!`)
    
})

app.listen(3000, () => {
    console.log(`Server running on port: ${3000}`);
})

