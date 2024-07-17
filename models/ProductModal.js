
const { string } = require('joi');
const mongoose=require('mongoose')
const productschema=mongoose.Schema(
    {
        prod_name:{
            type:String,
            required:true
        },
        prod_price:{
            type:String,
            required:true
        },
        prod_desc:{
            type:String,
            required:true
        }
    }
)

const product=mongoose.model("product",productschema)
module.exports=product;