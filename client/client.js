

const getAllUsers = async (params) => {
    try {
        let showAllUsers=document.getElementById("showAllUsers")
        await fetch("http://localhost:5003/userRouter")
        .then((response) => {
            return response.json()
        }).then((body) => {
            console.log(body)
            showAllUsers.innerHTML=`
            <ul>
            <li>ID: ${body[0].id}</li>
            <li>UserId: ${body[0].userId}</li>
            <li>User Title: ${body[0].title}</li>
            <li>User Body: ${body[0].body}</li>
            </ul>
            `
        }).catch((err) => {
            throw err
        })
    } catch(err) {
        console.error(err)
    }
}

const getById = async (event) => {
    let inputVal = document.getElementById("inputId").value;
    let showGetIdValue = document.getElementById("showGetIdValue")
    try{
       await fetch(`http://localhost:5003/userRouter/${inputVal}`)
        .then((response) => {
        return response.json()
        })
        .then((body) =>{
        console.log(body)
        showGetIdValue.innerHTML=`
        <ul>
        <li>ID is : ${body.id}</li>
        </ul>
        `
        })
    }catch(err){
      console.log(err.message)
    }
    } 


const addNewUsers = async (event) => {

    let inputUserId = document.getElementById("userId").value;
    let inputTitle = document.getElementById("title").value;
    let inputBody = document.getElementById("body").value;
    let showOldandNewUser= document.getElementById("showNewUser")
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
     for(let i=0; data.length>i; i++){
     showOldandNewUser.innerHTML+=`
     <ul>
     <li>ID: ${data[i].id}</li>
     <li>UserId: ${data[i].userId}</li>
     <li>User Title: ${data[i].title}</li>
     <li>User Body: ${data[i].body}</li>
     </ul>
     `}
    })
    .catch(err => console.log(err));

}

const updateUsers = async (event) => {

    let updateTitle = document.getElementById("updateTitle").value;
    let showUpdateValue= document.getElementById("showUpdateValue")
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
     showUpdateValue.innerHTML=`
     <ul>
     <li style="color:red">${data}</li>
     </ul>
     `
    })
    .catch(err => console.log(err));

}


const deleteByUserId= async (event) => {
    let delUserId = document.getElementById("delUserId").value;
    let showDeleteValue= document.getElementById("showDeleteValue")
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
     showDeleteValue.innerHTML=`
     <ul>
     <li style="color:black"> ${data}</li>
     </ul>
     `
    })
    .catch(err => console.log(err));

    } 

document.getElementById("getAllBtn").addEventListener("click", getAllUsers)
document.getElementById("GetById").addEventListener("click", getById) 
document.getElementById("addNewUser").addEventListener("click", addNewUsers)
document.getElementById("update").addEventListener("click", updateUsers)
document.getElementById("delete").addEventListener("click", deleteByUserId)
