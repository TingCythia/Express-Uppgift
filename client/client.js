
const getAllUsers = async (params) => {
    try {

        fetch("http://localhost:5000/userRouter").then((response) => {
            return response.json()
        }).then((body) => {
            console.log(body)
        }).catch((err) => {
            throw err
        })

    } catch(err) {
        console.error(err)
    }
}

const getById = async (event) => {
    let inputVal = document.getElementsByTagName("input")[0].value; 
    try{
        fetch(`http://localhost:5000/userRouter/${inputVal}`)
        .then((response) => {
        return response.json()
        })
        .then((body) =>{
        console.log(body)
        })
    }catch(err){
      console.log(err.message)
    }
    } 


const addNewUsers = async (event) => {
    
    let addNewUser = {
            userId: 5,
            title: "titlevalue",
            body: "bodyvalue"
        };

    let options =      
         {
            method:'POST',
            body:JSON.stringify({addNewUser}),
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },      
           }
           
    try{
     fetch("http://localhost:5000/userRouter", options)
    .then((res)=>{
        return res.json()
    }).then((body)=>{
        console.log(body)
    }).catch((err)=>{
        throw err
    })}catch(err){
        console.log(err.message)
      }
}

document.getElementById("getAllBtn").addEventListener("click", getAllUsers)
document.getElementById("GetById").addEventListener("click", getById) 
document.getElementById("addNewUser").addEventListener("click", addNewUsers)
/* function addUserLists(){
 
   userObj.forEach((user)=>{
    var ul = '<ul>';
    ul += '<li>'+user.id+'</li>';
    ul += '<li>'+user.name+'</li>';
    ul += '<li>'+user.books+'</li>';
    ul += '<li>'+user.companies+'</li>';
    ul += '</ul>'
    document.getElementById("users").innerHTML += ul;
    
   })
   
}
 */