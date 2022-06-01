var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))


//create express ap
const path = require("path")



//connect angular app with express server
app.use(express.static(path.join(__dirname, './dist/srgauni/')))

mongoose.connect('mongodb://localhost:27017/admin',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/createuser",(req, res, next) => {
   
    let data=req.body;
    console.log(data)
    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('C:\Users\tony\srgauni\success.html')

})



//assign port
const port=4200
app.listen(port, () => console.log(`server on ${port}...`))


//console.log("Listening on PORT 4200");
username.get("/getproducts/:id", (req, res, next) => {

    let productCollectionObject = req.app.get("productCollectionObject")

    let un = req.params.id;
    console.log(un)

    let products = productCollectionObject.find().toArray()
    // let first=userProdObj[Object.keys(userProdObj)[0]]
   // console.log(products)
    for (let key in products){
        let obj = products[key];
        
        if(obj.name===un){
            //console.log(obj)
            res.send({ message: obj })
        }
    }
    
      
  
    

})