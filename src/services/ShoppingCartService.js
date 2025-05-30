import axios from 'axios'
import authHeader from './AuthHeader'
import Util from './Util'
class ShoppingProductService{
     getShopping(id){
      console.log("Tu id" + id)
        return  axios.get(Util.urlAPI()+"/ShoppingCart/"+id,{ headers: authHeader() })
        .then(res=> {
          console.log(res.data)
          return res.data
        }).catch( error=>{
          Util.handleResponse(error)
          return error
        }
        )
    }


     postShopping(ShoppingCart){
        return axios.post(Util.urlAPI()+"/ShoppingCart",ShoppingCart,{ headers: authHeader() })
        .then(res=> {
         console.log("Created" + res.data)
         return res.data
       }).catch( error=>{
        Util.handleResponse(error)
        return error
       }
       )
     }

     patchShopping(ShoppingCart){
      return axios.patch(Util.urlAPI()+"/ShoppingCart",ShoppingCart,{ headers: authHeader() })
      .then(res=> {
         console.log("Updated" + res.data)
         return res.data
       }).catch( error=>{
        Util.handleResponse(error)
        return error
       }
       )
     }
}


export default new ShoppingProductService()