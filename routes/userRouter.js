import express from "express";
import fetch from "node-fetch";
import { nanoid } from "nanoid"  
export const router = express.Router();


let userList =[] ;
let user;
/* Get external api */
router.get(`/externalApi`, async function (req, res) {
    try {   
        const url =
        'https://jsonplaceholder.typicode.com/posts/1';
        let response =  await fetch(url);
        let body = await response.json();
        res.json(body)
    } catch (err) {
        console.log(err);
        res.status(404).json(err.message)
    } 
});

/* Get all request body */
router.get(`/`, async function (req, res) {
        try {   
            res.json(userList)
        } catch (err) {
            console.log(err);
            res.status(404).json(err.message)
        } 
    });

/* post new user  */
 router.post("/", async (req, res)=>{
    try{
        const userExists = userList.find(users => users.title == req.body.title)
    if (userExists){
            throw new Error("User already exists")
        }
         user = {
            id: nanoid(),
            title: req.body.title,
            body:req.body.body
           }
        userList.push(user)
        return res.status(201).json(user)
        
    }catch(err){
        res.status(400).json(err.message)
    }

})  

    /* Get all specific ID */
    router.get("/:id",  async (req, res) =>{

            // promise syntax
                try {

                    const foundUser = userList.find((user)=>{
                       if(user.id == req.params.id) {
                           console.log(user.id)
                           return true
                       }
                    })
                    if(!foundUser) {
                        throw new Error("Id does not exists..")
                     }
                     res.json(foundUser)
                } catch (err) {
                    console.log(err);
                    res.status(404).json(err.message)
                };
        
    })


/* Put value */
router.put("/", async (req, res) => {

    try {
        const indexToUpdate = userList.findIndex(user =>
          user.id == req.body.id)
           
        if(indexToUpdate == -1) {
            throw new Error("Can not find update value")
         }
         
         const titleBeforeUpdate = userList[indexToUpdate].title

         userList[indexToUpdate] = req.body
         
         console.log(req.body.title)
         res.json(`User with old name ${titleBeforeUpdate} has been updated to  "${userList[indexToUpdate].title}"!`)

    } catch (err) {
        console.log(err);
        res.status(404).json(err.message)
    };
}) 

/* Delete value */
router.delete("/:userId", async (req, res) => {

    try {
        const indexToRemove = userList.findIndex(user =>
          user.id == req.params.userId)
           
        if(indexToRemove == -1) {
            throw new Error("Can not find delete value")
         }
         
         const titleToRemove = userList[indexToRemove].title

         userList.splice(indexToRemove, 1)
         
         console.log("Remove success")
         res.json(`Users with title "${titleToRemove} "is removed!`)

    } catch (err) {
        console.log(err);
        res.status(404).json(err.message)
    };
}) 



router.use((err, req, res, next) =>{
    console.log(err.status)
    console.log(err.message)
    res.status(500).json(err)
})

