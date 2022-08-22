import express from "express"

const app = express()
const port = 5000

app.use(express.json())


app.get('/', function(req, res) {
    res.send('hello world!');
});

app.listen(port, () => {
    //console.log (`App is running on port ${port }`)
    console.log("App is running on port " + port)
})