import express from "express";
/* import { nanoid } from "nanoid" */
export const router = express.Router();

const fetch = (...args) =>
import('node-fetch').then(({default: fetch}) => fetch(...args));

/* Get all request body */
    router.get(`/`, async function (req, res) {
        const url =
            'https://jsonplaceholder.typicode.com/posts/1';
        const options = {
            method: 'GET',
            headers: {
              "Content-Type" : "application/json"
            }
        };
        // promise syntax
      fetch(url, options)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error('error:' + err)); 

        try {
            let response = await fetch(url, options);
            response = await response.json();
            res.status(200).json(response);
        } catch (err) {
            console.log(err);
            res.status(500).json({msg: `Internal Server Error.`});
        } 
    });

    /* Get all specific ID */
router.get("/:id",  async (req, res) =>{
    const url =
            'https://jsonplaceholder.typicode.com/posts/1';
        const options = {
            method: 'GET',
            headers: {
              "Content-Type" : "application/json"
            }
        };
        // promise syntax
       fetch(url, options)
            .then(res => res.json())
            .then(body=> console.log("This is body", body))
            .catch(err => console.error('error:' + err)); 
        
            try {
                let response = await fetch(url, options);
                response = await response.json();
                res.status(200).json(response);

                var userList = req.params.id
                console.log(userList)
                const foundUser = userList.findIndex((user)=>{
                   if(user.id == req.params.id) {
                       console.log(user.id)
                       return true
                   }
                })
                if(!foundUser) {
                    console.error("Id does not exists..")
                 }
                 res.json(foundUser)
            } catch (err) {
                console.log(err);
                res.status(404).json(err.message)
                /* res.status(500).json({msg: `Internal Server Error.`}); */
            };

/*     try {
     var userList = []
     const foundUser = userList.findIndex((user)=>{
        if(user.id === req.params.id) {
            console.log(user.id)
            return true
        }
     })

     if(!foundUser) {
        throw new Error("Id does not exists..")
     }
     res.json(foundUser)
    }catch(err){
     res.status(404).json(err.message)
    } */
})

/* router.post("/", (req, res)=>{
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

})  */

router.use((err, req, res, next) =>{
    console.log(err.status)
    console.log(err.message)
    res.status(500).json(err)
})

