import axios from 'axios'

class ProductService{
     getProducts(){
        return  axios.get("http://localhost:8080/products")
        .then(res=> {
          console.log(res.data)
          return res.data
        }).catch( error=>{
         console.log("Not found, error:" + error.status)
         
        }
        )
    }
    getProductById(id){
      return  axios.get("http://localhost:8080/products/"+id)
      .then(res=> {
        console.log(res.data)
        return res.data
      }).catch( error=>{
       console.log("Not found, error:" + error.status)
       
      }
      )
  }
    searchProducts(x){
      return  axios.get("http://localhost:8080/search/"+x)
      .then(res=> {
        console.log(res.data)
        return res.data
      }).catch( error=>{
       console.log("Not found, error:" + error.status)
       
      }
      )
  }
  searchProductsByUser(id){
    return  axios.get("http://localhost:8080/searchByUser/"+id)
    .then(res=> {
      console.log(res.data)
      return res.data
    }).catch( error=>{
     console.log("Not found, error:" + error.status)
     
    }
    )
}

     postProduct(newProduct){
        axios.post("http://localhost:8080/products",newProduct).then(res=> {
         console.log("Not created" + res.data)
         return res.data
       }).catch( error=>{
        console.log("Error:" + error.status)
        
       }
       )
     }
     deleteProduct(x){
        axios.delete("http://localhost:8080/products",{data:x}).then(res=> {
         console.log("Se borró producto" + res.data)
         return res.data
       }).catch( error=>{
        console.log("Error:" + error.status)
        
       }
       )
     }
     patchProduct(updatedProduct){
      axios.patch("http://localhost:8080/products",updatedProduct).then(res=> {
         console.log("Not updated" + res.data)
         return res.data
       }).catch( error=>{
        console.log("Errror:" + error.status)
        
       }
       )
     }
}


export default new ProductService()