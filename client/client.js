
const getAllUsers = async (event) => {
try{
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
        return response.json()
    }).then((body) =>{
    console.log(body)
    }).catch((err) =>{
        throw err
    })

}catch(err){
  console.error(err)
}
}

/* const getById = async (event) => {
    try{
        fetch("http://localhost:5000/userRouter/1").then((response) => {
            return response.json()
        }).then((body) =>{
        console.log(body)
        }).catch((err) =>{
            throw err
        })
    
    }catch(err){
      console.error(err)
    }
    }


const addNewUsers = async (event) => {
    try {

        const newUserToAdd = {
            id : 4,
            isPublic: true,
            name: "user4",
            companies: "com4",
            books: "book4"
        }

        const response = await fetch("http://localhost:5000/userRouter", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUserToAdd)
        })
        const body = await response.json()
        console.log(body)
    } catch(err) {

    }
} */

document.getElementById("getAllBtn").addEventListener("click", getAllUsers)
/* document.getElementById("addNewUser").addEventListener("click", addNewUsers)
document.getElementById("GetById").addEventListener("click", getById) */

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