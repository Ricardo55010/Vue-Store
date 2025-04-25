import axios from 'axios'

class OrderService{
     getOrders(id){
      console.log("Tu id" + id)
        return  axios.get("http://localhost:8080/Order/"+id)
        .then(res=> {
          console.log(res.data)
          return res.data
        }).catch( error=>{
         console.log("Not found, error:" + error.status)
         
        }
        )
    }


     postOrder(Order){
        axios.post("http://localhost:8080/Order",Order).then(res=> {
         console.log("Created" + res.data)
         return res.data
       }).catch( error=>{
        console.log("Error:" + error.status)
        
       }
       )
     }

}


export default new OrderService()