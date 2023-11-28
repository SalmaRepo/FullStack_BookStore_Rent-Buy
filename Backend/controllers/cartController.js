import Order from "../models/cartSchema.js";
import User from "../models/userSchema.js";

/* const updatePrice = async (found) => {
  let sum = 0;
  for (let i = 0; i < found.length; i++) {
    const findRecord = await Record.find({ _id: found[i] })

    sum = sum + findRecord[0].price;

  }

  return sum

}
 */


export const addOrder = async (req, res, next) => {


    try {
        const order = await Order.create(req.body);

        const updatedUser = await User.findByIdAndUpdate(req.body.userId, { $push: { orders: order._id } }, { new: true })
        .populate({ path: "orders", populate: { path: "books" } })
        res.status(200).send({ msg: "order created", updatedUser });



    } catch (err) {
        next(err);
    }
};

export const getOrders = async (req, res, next) => {
    try {
        const orders = await Order.find().populate("books", "-_id");
        res.status(200).send(orders);
    } catch (err) {
        next(err);
    }
};

export const getSingleOrder = async (req, res, next) => {
    try {
        const singleOrder = await Order.findOne({ _id: req.params.id }).populate("books").populate("userId", "firstName lastName");
        res.status(200).send(singleOrder);
    } catch (err) {
        next(err);
    }
};

export const getOrderByUserId = async (req, res, next) => {
    try {
        const orderByUserId = await Order.find({ userId: req.params.id }).populate("books")/* .populate("userId", "firstName lastName") */;
        console.log(orderByUserId)
        res.status(200).send(orderByUserId);

    } catch (err) {
        next(err);
    }
};

export const updateOrder = async (req, res, next) => {
    try {
        const update = await Order.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(300).send(update)
    } catch (err) {
        next(err);
    }
};

export const deleteOrder = async (req, res, next) => {
    try {
        const delOne = await Order.findByIdAndDelete(req.params.id)
        res.send("book deleted")
    } catch (err) {
        next(err);
    }
};
