import express from "express";
import { nanoid } from "nanoid"
export const router = express.Router();



router.get("/", (req, res) =>{
res.json()
})

/* router.get("/:id", (req, res) =>{
    try {
     const foundUser = userList.find((user)=>{
        if(user.id == req.params.id) {
            return true
            
        }
     })

     if(!foundUser) {
        throw new Error("Id does not exists..")
     }
     res.json(foundUser)
    }catch(err){
     res.status(404).json(err.message)
    }
})

router.post("/", (req, res)=>{
    try{
        if (!req.body || !req.body.name || !req.body.id) {
            throw new Error("Body is not set correctly...")
        }
        
        const userExitst = userList.find(user => user.name == req.body.name)
        if(userExitst) {
            throw new Error("User already exists")
        }

        let newUser = req.body
        
        userList.push(newUser)
        res.json( "New User Added!")
    }catch(err){
        res.status(400).json(err.message)
    }

}) */

router.use((err, req, res, next) =>{
    console.log(err.status)
    console.log(err.message)
    res.status(500).json(err)
})

