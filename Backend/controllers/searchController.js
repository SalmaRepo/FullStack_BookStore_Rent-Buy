import Book from "../models/booksSchema.js";


export const searchBooksByName = async (req, res, next) => {
    console.log(req.query.name)
    try {
//.where({title: { $regex: req.query.name.toString(), $options: "i" }})


        // const findBook = await Book.find({
        //     $or: [{ title: { $regex: req.query.name , $options:"i"} }
        //         , { authors: { name: {$regex: req.query.name, $options:"i" } } }
        //         , { bookshelves: { $regex: req.query.name, $options:"i"} }]
        // })
        // work for one input

        // const findBook = await Book.aggregate(
        //   [ { $match: { title: req.query.name }} ]
             
        // )

const findBook = await Book.find({$or:[{title:{$regex:req.query.name , $options:"i"}}, {bookshelves: { $regex: req.query.name, $options:"i"}}, { "authors.name":  {$regex: req.query.name, $options:"i" } } ]})

        console.log(findBook)

        if (findBook) {
            res.send({ success: true, data: findBook })
        } else {
            res.send({ success: false })
        }

    } catch (err) {
        next(err)
    }
}