const express = require('express');
const cors = require("cors");
const {v4: uuidv4} = require ('uuid');
const app = express()
app.use(cors());

//Middeware for data on post request
app.use(express.json({ extended: false}));

// initial data
const web_projects =[
    {
        id: "1",
        title:"React Game!",
        description: "Tic tac toe game created using Create Reactapp.",
        URL: "http://heroku/myapp/game/" 
    },
    {
        id: "2",
        title:"Onlinestore",
        description: "Online store created with HTML, CSS andJavaScript.",
        URL: "https://git.com/myrepos/shop/index"
    }
]
//gets data
app.get("/", (req,res) => {
    res.status(200).json(web_projects);
});
//add data
app.post("/", (req,res)=> {
    const newTodo= {
        title:req.body.title,
        id:uuidv4()
    }
    web_projects.push(newTodo)
    res.status(201).json(web_projects)
})

const PORT = 8080
app.listen(PORT, ()=> {
    console.log(`server running on port: ${PORT}`)

})



