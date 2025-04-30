import axios from 'axios'
import authHeader from './AuthHeader'
class CategoryService{
     getCategories(){
        return  axios.get("http://localhost:8080/categories",{ headers: authHeader() })
        .then(res=> {
          console.log(res.data)
          return res.data
        }).catch( error=>{
         console.log("Not found, error:" + error.status)
         
        }
        )
    }

}


export default new CategoryService()