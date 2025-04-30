import axios from 'axios'
import authHeader from './AuthHeader'
class ShoppingProductService{
     getShopping(id){
      console.log("Tu id" + id)
        return  axios.get("http://localhost:8080/ShoppingCart/"+id,{ headers: authHeader() })
        .then(res=> {
          console.log(res.data)
          return res.data
        }).catch( error=>{
         console.log("Not found, error:" + error.status)
         
        }
        )
    }


     postShopping(ShoppingCart){
        axios.post("http://localhost:8080/ShoppingCart",ShoppingCart,{ headers: authHeader() }).then(res=> {
         console.log("Created" + res.data)
         return res.data
       }).catch( error=>{
        console.log("Error:" + error.status)
        
       }
       )
     }

     patchShopping(ShoppingCart){
      axios.patch("http://localhost:8080/ShoppingCart",ShoppingCart,{ headers: authHeader() }).then(res=> {
         console.log("Updated" + res.data)
         return res.data
       }).catch( error=>{
        console.log("Errror:" + error.status)
        
       }
       )
     }
}


export default new ShoppingProductService()