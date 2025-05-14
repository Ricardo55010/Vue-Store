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
        return axios.post(Util.urlAPI()+"/comment",comment,{ headers: authHeader() })
        .then(res=> {
         console.log("Created" + res.data)
         return res.data
       }).catch( error=>{
        Util.handleResponse(error)
       }
       )
     }

     addSubComment(subcomment,id){
      alert(id)
        return axios.patch(Util.urlAPI()+"/comment/subComment/"+id,subcomment,{ headers: authHeader() })
        .then(res=> {
         alert(res.status)
         console.log("SubCommentCreated" + res.data)
         return res.data
       }).catch( error=>{
        alert("caiste en error papu :v")
        alert(error.status)
        Util.handleResponse(error)
       }
       )
     }

     deleteComment(comment){
        return axios.delete(Util.urlAPI()+"/comment",{data:comment},{ headers: authHeader() })
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