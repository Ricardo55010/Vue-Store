import axios from 'axios'
import authHeader from './AuthHeader'
import Util from './Util'
class OrderService{
     getOrders(id){
        return  axios.get(Util.urlAPI()+"/Order/"+id,{ headers: authHeader() })
        .then(res=> {
          console.log(res.data)
          return res.data
        }).catch( error=>{
          Util.handleResponse(error)
          return error
        }
        )
    }


     postOrder(Order){
        return axios.post(Util.urlAPI()+"/Order",Order,{ headers: authHeader() })
        .then(res=> {
         console.log("Created" + res.data)
         return res.data
       }).catch( error=>{
        Util.handleResponse(error)
        return error
       }
       )
     }

}


export default new OrderService()