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

export const createBook = async (req, res,next)=>{
    try {
        const newBook = await Book.create(req.body);

        if(newBook){
            res.send({success:true, data:newBook})
        }else{
            res.send({success:false})
        }
    } catch (err) {
        next(err)
    }
}

export const updateBook = async (req,res,next)=>{

    try {
        const updateOne = await Book.findByIdAndUpdate(req.params.id, req.body, {new:true});

        if(updateOne){
            res.send({success:true, data:updateOne})
        }else{
            res.send({success:false})
        }
    } catch (err) {
        next(err)
    }
}

export const deleteBook = async(req,res,next)=>{
    try {
        const deleteOne = await Book.findByIdAndDelete(req.params.id)

        if(deleteOne){
            res.send({success:true, data:deleteOne})
        }else{
            res.send({success:false})
        }
    } catch (err) {
        next(err)
    }
}