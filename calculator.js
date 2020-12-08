const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.get("/", (req, res) => {
    // res.send("<h1>Hello World</h1>")
    res.sendFile(__dirname + "/index.html")
});

app.post("/", (req, res) => {
    console.log(req.body) //  body is included req as on object 
    let num1 = Number(req.body.num1)
    let num2 = Number(req.body.num2)
    let result = num1 + num2
    res.send("the result of this calculation is " + result )
});

//==================

app.get("/bmicalculator", (req, res) =>{
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", (req, res) =>{
    console.log(req.body)
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    let r = weight * height
    res.send("Your BMI is " + r)
    
})
app.listen(3000, () =>{
    console.log("sever has started at port 3000")
})
