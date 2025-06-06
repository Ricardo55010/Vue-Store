import axios from 'axios'
import authHeader from './AuthHeader'
import Util from './Util'
class UserService{
     getUser(){
        return  axios.get(Util.urlAPI()+"/Auth",{ headers: authHeader() })
        .then(res=> {
          console.log(res.data)
          return res.data
        }).catch( error=>{
         console.log("Error:" + error.status)
         
        }
        )
    }
    postUser(user){
      return axios.post(Util.urlAPI()+"/User",user).then(res=> {
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
     return axios.post(Util.urlAPIAuth()+"/oauth2/token",params).then(res=> {
      console.log("Logged" + res.data)
      console.log(res.data)
      localStorage.setItem('token',JSON.stringify(res.data));
      return res.data   
   }).catch( error=>{
      Util.handleResponse(error)
      return error
   })
  }

}


export default new UserService()