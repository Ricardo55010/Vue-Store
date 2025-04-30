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
         console.log("Not found, error:" + error.status)
         
        }
        )
    }


     postOrder(Order){
        axios.post(Util.urlAPI()+"/Order",Order,{ headers: authHeader() }).then(res=> {
         console.log("Created" + res.data)
         return res.data
       }).catch( error=>{
        console.log("Error:" + error.status)
        
       }
       )
     }

}


export default new OrderService()