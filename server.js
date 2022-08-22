import express from "express"

import { router } from "./routers/route.js"

const app = express()
const port = 5000

app.use(express.json())
app.use(express.static("./client"))
app.use("/route", router)

app.use((err, req, res, next) => {
    console.log(err.status)
    console.log(err.message)
    res.status(500).json(err)
});

app.listen(port, () => {
    //console.log (`App is running on port ${port }`)
    console.log("App is running on port " + port)
})