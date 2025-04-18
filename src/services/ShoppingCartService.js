import axios from 'axios'

class ShoppingProductService{
     getShopping(id){
      console.log("Tu id" + id)
        return  axios.get("http://localhost:8080/ShoppingCart/"+id)
        .then(res=> {
          console.log(res.data)
          return res.data
        }).catch( error=>{
         console.log("Not found, error:" + error.status)
         
        }
        )
    }


     postShopping(ShoppingCart){
        axios.post("http://localhost:8080/ShoppingCart",ShoppingCart).then(res=> {
         console.log("Not created" + res.data)
         return res.data
       }).catch( error=>{
        console.log("Error:" + error.status)
        
       }
       )
     }

     patchShopping(ShoppingCart){
      axios.patch("http://localhost:8080/ShoppingCart",ShoppingCart).then(res=> {
         console.log("Not updated" + res.data)
         return res.data
       }).catch( error=>{
        console.log("rrror:" + error.status)
        
       }
       )
     }
}


export default new ShoppingProductService()