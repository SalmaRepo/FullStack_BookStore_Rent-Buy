export const isAdmin = (req, res, next) => {
    try {
        if (req.user.role === "admin") { //here req.user.role is from authorization middlleware
            next()
        } else if(req.user._id.toString() || req.user._id.toString()=== req.params.id || req.user.orders.includes(req.params.id)){//we are converting to string as req.user._id is object 
            next()
        }
        else {
            res.status(401).send("unauthorized access!")
        }

    }
    catch (err) {
        console.log(err)
        next(err)
    }

}