import axios from 'axios'
import authHeader from './AuthHeader'
class ProductService{
    getCommentsById(id){
      return  axios.get("http://localhost:8080/comment/"+id,{ headers: authHeader() })
      .then(res=> {
        console.log(res.data)
        return res.data
      }).catch( error=>{
       console.log("Not found, error:" + error.status)
       
      }
      )
  }


     postComment(comment){
        axios.post("http://localhost:8080/comment",comment,{ headers: authHeader() }).then(res=> {
         console.log("Created" + res.data)
         return res.data
       }).catch( error=>{
        console.log("Error:" + error.status)
        
       }
       )
     }
     deleteComment(comment){
        axios.delete("http://localhost:8080/comment",{data:comment},{ headers: authHeader() }).then(res=> {
         console.log("Deleted" + res.data)
         return res.data
       }).catch( error=>{
        console.log("Error:" + error.status)
        
       }
       )
     }
  
}


export default new ProductService()