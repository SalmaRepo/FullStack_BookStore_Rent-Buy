import Book from "../models/booksSchema.js";


export const getAllBooks=async (req,res,next)=>{
    try{
        const allBooks=await Book.find();

        if(allBooks){
            res.send({success:true,data:allBooks})
        }else{
            res.send({success:false})
        }
        

    }catch(err){
        next(err)
    }
}

export const getBookById=async (req,res,next)=>{
    try{
        const singleBook=await Book.findById(req.params.id);

        if(singleBook){
            res.send({success:true,data:singleBook})
        }else{
            res.send({success:false})
        }
        

    }catch(err){
        next(err)
    }
}

//create, update, delete