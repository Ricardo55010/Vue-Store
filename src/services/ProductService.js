import axios from 'axios'

class ProductService{
     getProducts(){
        return  axios.get("http://localhost:8080/products")
        .then(res=> {
          console.log(res.data)
          return res.data
        }).catch( error=>{
         console.log("No se encontró, error:" + error.status)
         
        }
        )
    }
     postProduct(newProduct){
        axios.post("http://localhost:8080/products",newProduct).then(res=> {
         console.log("Se creo producto" + res.data)
         return res.data
       }).catch( error=>{
        console.log("No se creo, error:" + error.status)
        
       }
       )
     }
     deleteProduct(x){
        axios.delete("http://localhost:8080/products",{data:x}).then(res=> {
         console.log("Se borró producto" + res.data)
         return res.data
       }).catch( error=>{
        console.log("No se borró, error:" + error.status)
        
       }
       )
     }
     patchProduct(updatedProduct){
      axios.patch("http://localhost:8080/products",updatedProduct).then(res=> {
         console.log("Se acutalizó producto" + res.data)
         return res.data
       }).catch( error=>{
        console.log("No se actualizó, error:" + error.status)
        
       }
       )
     }
}


export default new ProductService()