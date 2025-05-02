import axios from 'axios'
import authHeader from './AuthHeader'
import Util from './Util'
class CategoryService{
     getCategories(){
        return  axios.get(Util.urlAPI() +"/categories",{ headers: authHeader() })
        .then(res=> {
          console.log(res.data)
          return res.data
        }).catch( error=>{
          Util.handleResponse(error)
        }
        )
    }

}


export default new CategoryService()