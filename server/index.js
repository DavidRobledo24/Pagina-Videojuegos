const express = require('express');
const app = express();
const cors = require("cors")
const bodyParser = require(body-parser)

app.use(bodyParser.urlencoded({expended: true}))
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

app.get("/", (req, res) =>{
    res.send("saludando desde el backend")
})

const user = require("./controler/userControler")
app.use("/registro-usuario", user.register)
app.use("/login",user.login)

const PORT = 3001
app.listen(PORT,()=>{
    console.log("servidor corriendo en el puerte ", PORT)
})