import express from "express";
import fetch from "node-fetch";
import { nanoid } from "nanoid"
export const router = express.Router();


let userList = [];
let user;
let randomUser;


/* Get all request body */
router.get(`/`, async function (req, res) {
    try {
        res.json(userList)
    } catch (err) {
        console.log(err);
        res.status(404).json(err.message)
    }
});
/* Get external api */
router.post(`/externalApi`, async function (req, res) {
    try {
        const url =
            'https://random-data-api.com/api/v2/users?size=2&is_xml=true';
        let response = await fetch(url);
        let body = await response.json();
        randomUser = {
            id: body[0].id,
            firstName: body[0].first_name,
            lastName: body[0].last_name,
            gender: body[0].gender
        }
        userList.push(randomUser)
        console.log(randomUser)
        res.json("Random user from Api is saved")
    } catch (err) {
        console.log(err);
        res.status(404).json(err.message)
    }
});

/* post new user  */
router.post("/", async (req, res) => {
    try {
        const userExists = userList.find(users => users.firstName == req.body.first_name)
        if (userExists) {
            throw new Error("User already exists")
        }
        user = {
            id: nanoid(),
            firstName: req.body.first_name,
            lastName: req.body.last_name,
            gender: req.body.gender
        }
        userList.push(user)
        return res.status(201).json("New user add success")

    } catch (err) {
        res.status(400).json(err.message)
    }

})

/* Get all specific ID */
router.get("/:id", async (req, res) => {

    // promise syntax
    try {

        const foundUser = userList.find((user) => {
            if (user.id == req.params.id) {
                console.log(user.id)
                return true
            }
        })
        if (!foundUser) {
            throw new Error("Id does not exists..")
        }
        res.json(foundUser)
    } catch (err) {
        console.log(err);
        res.status(404).json(err.message)
    };

})


/* Put value */
router.put("/:id", async (req, res) => {

    try {

        const indexToUpdate = userList.findIndex(user =>
            user.id == req.params.id)
        if (indexToUpdate == -1) {
            throw new Error("Can not find update value")
        }


        const titleBeforeUpdate = userList[indexToUpdate].firstName

        userList[indexToUpdate] = req.body

        console.log(req.body)
        res.json(`User with old name ${titleBeforeUpdate} has been updated to  "${userList[indexToUpdate].firstName}"!`)

    } catch (err) {
        console.log(err);
        res.status(404).json(err.message)
    };
})

/* Delete value */
router.delete("/:id", async (req, res) => {

    try {
        const indexToRemove = userList.findIndex(user =>
            user.id == req.params.id)

        if (indexToRemove == -1) {
            throw new Error("Can not find delete value")
        }

        const titleToRemove = userList[indexToRemove].firstName

        userList.splice(indexToRemove, 1)

        console.log("Remove success")
        res.json(`Users with title "${titleToRemove} "is removed!`)

    } catch (err) {
        console.log(err);
        res.status(404).json(err.message)
    };
})



router.use((err, req, res, next) => {
    console.log(err.status)
    console.log(err.message)
    res.status(500).json(err)
})

