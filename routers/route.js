import express from "express"

export const router = express.Router()

const userList = getUserList();

function getUserList (){
    return [
    {
        id: 1,
        isPublic: true,
        name: 'user1',
        companies: ['com1', 'com2', 'com3'],
        books: [{
        name: 'book1',
        amount: 1,
        },
        {
        name: 'book2',
        amount: 200,
        }]
    },
    {
        id: 2,
        isPublic: true,
        name: 'KK',
        companies: ['com1', 'com2', 'com3'],
        books: 
        [{
        name: 'kk1',
        amount: 1,
        },
        {
        name: 'kk2',
        amount: 200,
        }]
    }
]
}

router.get("/", (req, res) =>{
    res.json(userList)
})

router.post("/", (req,res)=>{
    console.log(req.body)
    if (!req.body || !req.body.name || ! req.body.id) {
        throw new Error("Body is not set correctly...")
    }

    userList.push({...req.body, ...{id:3}})
    res.json({status: "New User Added!"})
})

router.use((err, req, res, next) =>{
    console.log(err.status)
    console.log(err.message)
    res.status(500).json(err)
})