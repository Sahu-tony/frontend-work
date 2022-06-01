productApi.get("/getproducts/:id", expressErrorHandler(async (req, res, next) => {

    let productCollectionObject = req.app.get("productCollectionObject")

    let un = req.params.id;
    console.log(un)

    let products = await productCollectionObject.find().toArray()
    // let first=userProdObj[Object.keys(userProdObj)[0]]
   // console.log(products)
    for (let key in products){
        let obj = products[key];
        
        if(obj.name===un){
            //console.log(obj)
            res.send({ message: obj })
        }
    }
    
      
  
    

}))