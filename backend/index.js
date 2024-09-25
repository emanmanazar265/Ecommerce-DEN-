
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');
const Users = require('./Models/User'); // Adjust path as needed

require('dotenv').config();
require('./Models/db');
require('./Models/User');
const PORT = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.post('/login',async(req,res)=>{
    let user=await Users.findOne({email:req.body.email});
    if(user){
        const passCompare = req.body.password === user.password;
        if(passCompare){
            const data={
                user:{
                    id:user.id
                }
            }
            const token =jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"Wrong Password"})
        }
    }
    else{
        res.json({success:false,errors:"Wrong Email Id"})
    }
})

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})





















































































// const port=3001;
// const express = require("express");
// const app=express();
// const mongoose=require("mongoose");
// const jwt=require("jsonwebtoken");
// const multer=require("multer");
// const path= require("path");
// const cors=require("cors");

// app.use(express.json());
// app.use(cors());

// mongoose.connect("mongodb+srv://emanmanazar4:eman091@cluster0.cr2w3.mongodb.net/ecommerce")


// app.get("/",(req,res)=>{
//     res.send("Express app is running")
// })

// //Image storage engine
// const storage=multer.diskStorage({
//     destination:'./upload/images',
//     filename:(req,file,cb)=>{
//         return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// })
// const upload=multer({storage:storage})

// app.use('/images',express.static('upload/images'))
// app.post("/upload",upload.single('product'),(req,res)=>{
//        res.json({
//         success:1,
//         image_url:`http://localhost:${port}/images/${req.file.filename}`
//        })
// })



// app.listen(port,(error)=>{
//     if(!error){
//         console.log("Server running on port"+port)
//     }else{
//         console.log("error:"+error)
//     }
// })
