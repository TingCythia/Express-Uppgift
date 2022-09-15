

  const getAllUsers = async (params) => { 
    try {
        
        let originObj = document.getElementById("showAllUsers")
        originObj.innerHTML=""
        let response = await fetch("http://localhost:5003/userRouter")
        let userlist = await response.json()
        
        userlist.map((b) => {
            const ul = document.createElement("ul");
            const li = document.createElement("li");
            li.textContent ="ID: "+ b.id
            const li2 = document.createElement("li");
            li2.textContent ="Gender: "+ b.gender
            const li3 = document.createElement("li");
            li3.textContent ="First Name: "+ b.firstName
            const li4 = document.createElement("li");
            li4.textContent ="Last Name: "+ b.lastName
            ul.append(li,li2,li3,li4)
            originObj.append(ul)     
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
        if(typeof body == "string"){
            showGetIdValue.innerHTML = body
            return
        }
        showGetIdValue.innerHTML=`
        <ul>
        <li>ID is : ${body.id}</li>
        <li>FirstName is : ${body.firstName}</li>
        <li>LastName is : ${body.lastName}</li>
        <li>Gender is : ${body.gender}</li>
        </ul>
        `
        })
    }catch(err){
      console.log(err.message)
    }
    } 


const getRandomUser = (e) =>{
    fetch("http://localhost:5003/userRouter/externalApi", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
    })
    .then(res => res.json())
    .then(body => {
     console.log(body)
     showNewUser.innerHTML=body
    })
    .catch(err => console.log(err));
}

document.getElementById("randomUser").addEventListener("click", getRandomUser)

const addNewUsers = async (event) => {

    let Firstname = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let gender = document.getElementById("gender").value;
    let showNewUser= document.getElementById("showNewUser")
    fetch("http://localhost:5003/userRouter", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            first_name: Firstname,
            last_name: lastName,
            gender:gender
        })
    })
    .then(res => res.json())
    .then(data => {
     console.log(data)
     showNewUser.innerHTML=data
    })
    .catch(err => console.log(err));

}

const updateUsers = async (event) => {
    let findID = document.getElementById("findID").value;
    const Firstname= document.getElementById("updateFirstName").value;
    const lastName = document.getElementById("lastname").value;
    const gender = document.getElementById("gender").value;
    let showUpdateValue= document.getElementById("showUpdateValue")
    fetch(`http://localhost:5003/userRouter/${findID}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            id:findID, 
            firstName: Firstname,
            lastName:lastName,
            gender: gender
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
        }
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
