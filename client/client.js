
const getAllUsers = async (event) => {
try{

    fetch("http://localhost:5000/userRouter").then((response) => {
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

document.getElementById("SaveBtn").addEventListener("click", getAllUsers)
