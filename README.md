Learning REST API with GET, POST, PUT and DELETE

Request and Response between client and server side by using middleware router. 

Logic is create 3 main .js files contain server, client and routers.

server.js file is listening to the the port = 5003.

routes file created userRouter.js that fetch external open API which is https://jsonplaceholder.typicode.com/posts/1 and start create the GET, POST, PUT and DELETE methods . 

fetch function use nodefetch so both promise syntax and async & await syntax works . 

After fetch function when use POST method to generate new User id part, id use nanoid function. 

Client side will send request since server.js have made express.static('/client), client file have built simple index.html to display input value and button function, by fetching url endpoint through router, then server response back to client the response results. 
