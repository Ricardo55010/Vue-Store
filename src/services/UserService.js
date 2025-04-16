import axios from 'axios'

class UserService{
     getUse(id){
        return  axios.get("http://localhost:8080/User/"+id)
        .then(res=> {
          console.log(res.data)
          return res.data
        }).catch( error=>{
         console.log("Error:" + error.status)
         
        }
        )
    }
    postUser(user){
      return axios.post("http://localhost:8080/User",user).then(res=> {
       console.log("Created" + res.data)
       console.log(res.data)
       return res.data
     }).catch( error=>{
      console.log("Error:" + error.status)
      
     }
     )
   }

}


export default new UserService()