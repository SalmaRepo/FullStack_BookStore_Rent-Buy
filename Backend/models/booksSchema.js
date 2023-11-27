import {Schema,model} from "mongoose"

const booksSchema=new Schema({
    id:Number,
    title:{type:String,required:true},
    authors:[{
        name:String,
        birth_year:Number,
        death_year:Number
    }],
    translators:[],
    subjects:[String],
    bookshelves:[String],
    languages:[String],
    copyright:Boolean,
    media_type:String,
    formats: {
       //this needs to be checked if it is throwing error
      },
    download_count:Number
})

const Books=model("books",booksSchema)

export default Books