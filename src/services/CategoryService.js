import axios from 'axios'
import authHeader from './AuthHeader'
import Util from './Util'
class CategoryService{
     getCategories(){
        return  axios.get(Util.urlAPI() +"/categories",{ headers: authHeader() })
        .then(Util.handleResponse)
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