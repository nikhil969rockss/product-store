import { kMaxLength } from "buffer";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 50,
        trim: true,
    },
    price : {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
        trim: true,
    },
},{timesetamps: true})

const Product = mongoose.model("Product", productSchema);
export default Product;