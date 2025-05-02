import axios from 'axios'
import authHeader from './AuthHeader'
import Util from './Util'
class ProductService{
    getCommentsById(id){
      return  axios.get(Util.urlAPI()+"/comment/"+id,{ headers: authHeader() })
      .then(res=> {
        console.log(res.data)
        return res.data
      }).catch( error=>{
        Util.handleResponse(error)
      }
      )
  }


     postComment(comment){
        axios.post(Util.urlAPI()+"/comment",comment,{ headers: authHeader() })
        .then(res=> {
         console.log("Created" + res.data)
         return res.data
       }).catch( error=>{
        Util.handleResponse(error)
       }
       )
     }
     deleteComment(comment){
        axios.delete(Util.urlAPI()+"/comment",{data:comment},{ headers: authHeader() })
        .then(res=> {
         console.log("Deleted" + res.data)
         return res.data
       }).catch( error=>{
        Util.handleResponse(error)
       }
       )
     }
  
}


export default new ProductService()