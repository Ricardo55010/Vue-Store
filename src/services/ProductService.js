import axios from 'axios'
import authHeader from './AuthHeader'
class ProductService{
     getProducts(){
        return  axios.get("http://localhost:8080/products",{ headers: authHeader() })
        .then(res=> {
          console.log(res.data)
          return res.data
        }).catch( error=>{
         console.log("Not found, error:" + error.status)
         
        }
        )
    }
    getProductById(id){
      return  axios.get("http://localhost:8080/products/"+id,{ headers: authHeader() })
      .then(res=> {
        console.log(res.data)
        return res.data
      }).catch( error=>{
       console.log("Not found, error:" + error.status)
       
      }
      )
  }
    searchProducts(x){
      return  axios.get("http://localhost:8080/search/"+x,{ headers: authHeader() })
      .then(res=> {
        console.log(res.data)
        return res.data
      }).catch( error=>{
       console.log("Not found, error:" + error.status)
       
      }
      )
  }
  searchProductsByUser(id){
    return  axios.get("http://localhost:8080/searchByUser/"+id,{ headers: authHeader() })
    .then(res=> {
      console.log(res.data)
      return res.data
    }).catch( error=>{
     console.log("Not found, error:" + error.status)
     
    }
    )
}

     postProduct(newProduct){
        axios.post("http://localhost:8080/products",newProduct,{ headers: authHeader() }).then(res=> {
         console.log("Created" + res.data)
         return res.data
       }).catch( error=>{
        console.log("Error:" + error.status)
        
       }
       )
     }
     deleteProduct(x){
        axios.delete("http://localhost:8080/products",{data:x},{ headers: authHeader() }).then(res=> {
         console.log("Deleted" + res.data)
         return res.data
       }).catch( error=>{
        console.log("Error:" + error.status)
        
       }
       )
     }
     patchProduct(updatedProduct){
      axios.patch("http://localhost:8080/products",updatedProduct,{ headers: authHeader() }).then(res=> {
         console.log("Updated" + res.data)
         return res.data
       }).catch( error=>{
        console.log("Errror:" + error.status)
        
       }
       )
     }
}

export default new ProductService()