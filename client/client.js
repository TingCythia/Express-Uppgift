

const getAllUsers = async (params) => {
    try {

        await fetch("http://localhost:5003/userRouter").then((response) => {
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
    let inputVal = document.getElementById("inputId").value;
    try{
       await fetch(`http://localhost:5003/userRouter/${inputVal}`)
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

    let inputUserId = document.getElementById("userId").value;
    let inputTitle = document.getElementById("title").value;
    let inputBody = document.getElementById("body").value;

    fetch("http://localhost:5003/userRouter", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId: inputUserId,
            title: inputTitle,
            body:inputBody
        })
    })
    .then(res => res.json())
    .then(data => {
     console.log(data)
    })
    .catch(err => console.log(err));

}

const updateUsers = async (event) => {

    let updateTitle = document.getElementById("updateTitle").value;

    fetch("http://localhost:5003/userRouter", {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            id:1, 
            title: updateTitle,
        })
    })
    .then(res => res.json())
    .then(data => {
     console.log(data)
    })
    .catch(err => console.log(err));

}


const deleteByUserId= async (event) => {
    let delUserId = document.getElementById("delUserId").value;

    fetch(`http://localhost:5003/userRouter/${delUserId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            userId:1, 
            title: updateTitle,
        })
    })
    .then(res => res.json())
    .then(data => {
     console.log(data)
    })
    .catch(err => console.log(err));

    } 

document.getElementById("getAllBtn").addEventListener("click", getAllUsers)
document.getElementById("GetById").addEventListener("click", getById) 
document.getElementById("addNewUser").addEventListener("click", addNewUsers)
document.getElementById("update").addEventListener("click", updateUsers)
document.getElementById("delete").addEventListener("click", deleteByUserId)
