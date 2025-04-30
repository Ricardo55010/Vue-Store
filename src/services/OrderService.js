import axios from 'axios'
import authHeader from './AuthHeader'
class OrderService{
     getOrders(id){
        return  axios.get("http://localhost:8080/Order/"+id,{ headers: authHeader() })
        .then(res=> {
          console.log(res.data)
          return res.data
        }).catch( error=>{
         console.log("Not found, error:" + error.status)
         
        }
        )
    }


     postOrder(Order){
        axios.post("http://localhost:8080/Order",Order,{ headers: authHeader() }).then(res=> {
         console.log("Created" + res.data)
         return res.data
       }).catch( error=>{
        console.log("Error:" + error.status)
        
       }
       )
     }

}


export default new OrderService()