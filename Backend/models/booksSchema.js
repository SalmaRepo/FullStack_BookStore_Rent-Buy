import {Schema,model} from "mongoose"

const booksSchema=new Schema({
    id:Number,
    title:{type:String,required:true},
    authors:[{
        name:{type:String},
        birth_year:Number,
        death_year:Number
    }],
    translators:[],
    subjects:[String],
    bookshelves:[{type:String}],
    languages:[String],
    copyright:Boolean,
    media_type:String,
    formats: {
       //this needs to be checked if it is throwing error
      },
    download_count:Number,
    quantity:{type:Number,default:1},
    

})

const Book=model("books",booksSchema)

export default Book