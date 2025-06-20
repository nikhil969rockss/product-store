import Product from "../models/productModel.js";

// @desc    Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: products,
    });
  } catch (error) {
    console.error("Error fetching products ", error.message);
    res.status(500).json({
      success: false,
      message: "Something went wrong, Try again later",
    });
  }
};

// @desc    Create a new product
export const createProduct = async (req, res) => {
  const product = req.body;

  try {
    if (!product.name || !product.price || !product.image) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const URLREGEX =
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

    if (!URLREGEX.test(product.image)) {
      return res.status(400).json({
        success: false,
        message: "Invalid image url",
      });
    }

    const newProduct = new Product(product);
    await newProduct.save();
    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong, Try again later",
    });
    console.error("Error creating Product ", error.message);
  }
};

// @desc    Update a product
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updateProductList = req.body;
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "Product id is required",
    });
  }
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      updateProductList,
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating Product ", error.message);
    res.status(500).json({
      success: false,
      message: "Something went wrong, Try again later",
    });
  }
};

// @desc    Delete a product
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "Product id is required",
    });
  }
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    await product.deleteOne();
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting Product ", error.message);
    res.status(500).json({
      success: false,
      message: "Something went wrong, Try again later",
    });
  }
};
