import axios from 'axios'
import authHeader from './AuthHeader'
class UserService{
     getUse(id){
        return  axios.get("http://localhost:8080/User/"+id,{ headers: authHeader() })
        .then(res=> {
          console.log(res.data)
          return res.data
        }).catch( error=>{
         console.log("Error:" + error.status)
         
        }
        )
    }
    postUser(user){
      return axios.post("http://localhost:8080/User",user,{ headers: authHeader() }).then(res=> {
       console.log("Created" + res.data)
       console.log(res.data)
       return res.data
     }).catch( error=>{
      console.log("Error:" + error.status)
      
     }
     )
   }

   login(user){
    const params = new URLSearchParams();
    params.append('client_id', user.email);
    params.append('client_secret', user.password);
    params.append('grant_type', 'client_credentials');
     console.log(params)
     return axios.post("http://localhost:9000/oauth2/token",params).then(res=> {
      console.log("Logged" + res.data)
      console.log(res.data)
      localStorage.setItem('token',JSON.stringify(res.data));
      return res.data   
   }).catch( error=>{
    console.log("Error not logged:" + error.status)
    
   })
  }

}


export default new UserService()