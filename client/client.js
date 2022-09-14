
 var obj1;

 fetch('http://localhost:5003/userRouter/externalApi')
  .then(res => res.json())
  .then(data => obj1 =data)
  .then(() => console.log(obj1))
 


  const getAllUsers = async (params) => { 
    try {
        var array =[obj1]
        
        let originObj = document.getElementById("showAllUsers")
        originObj.innerHTML=""
        await fetch("http://localhost:5003/userRouter")
        .then((response) => {
            return response.json()
        }).then((body) => {
        let array3 = array.concat(body)
          array3.map((b) => {
            const ul = document.createElement("ul");
            const li = document.createElement("li");
            li.textContent ="ID: "+ b.id
            const li3 = document.createElement("li");
            li3.textContent ="User Title: "+ b.title
            const li4 = document.createElement("li");
            li4.textContent ="User description: "+ b.body
            ul.append(li,li3,li4)
            originObj.append(ul)         
        })
        }).catch((err) => {
            throw err
        })
    } catch(err) {
        console.error(err)
    }
 }  


 document.getElementById("getAllBtn").addEventListener("click", getAllUsers
)


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

    let inputTitle = document.getElementById("title").value;
    let inputBody = document.getElementById("body").value;
    let showNewUser= document.getElementById("showNewUser")
    fetch("http://localhost:5003/userRouter", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: inputTitle,
            body:inputBody
        })
    })
    .then(res => res.json())
    .then(data => {
     console.log(data)
     showNewUser.innerHTML=`
     user has added success!
     `
    })
    .catch(err => console.log(err));

}

const updateUsers = async (event) => {
    let findID = document.getElementById("findID").value;
    let updateTitle = document.getElementById("updateTitle").value;
    let showUpdateValue= document.getElementById("showUpdateValue")
    fetch("http://localhost:5003/userRouter", {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            id:findID, 
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


document.getElementById("GetById").addEventListener("click", getById) 
document.getElementById("addNewUser").addEventListener("click", addNewUsers)
document.getElementById("update").addEventListener("click", updateUsers)
document.getElementById("delete").addEventListener("click", deleteByUserId)
