
const Product = require('../modals/Product.model')
const getAllProduct = async (req , res) => {
    try {
        const listOfProduct = await Product.find({})
        res.status(200).send(listOfProduct)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}


const createNewProduct = async (req , res) => {
    try {
        const body = req.body
        const productBody = await Product.create(body)
        res.status(200).json(productBody)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}


const getProductById = async (req , res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.send(product)
    } catch (error) {
        res.status(500).send({message : error})
    }
}

const updateProductById = async (req , res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id , req.body);
        if(!product){
            res.status(404).send({message : "Product not found"})
        }
        const updatedProduct = await Product.findById(id);
        res.send(updatedProduct) 
    } catch (error) {
        res.status(500).send({message : error.message})
    }
}


const deleteProductById = async (req , res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            res.status(400).send({message : "Product deleted successfully"})
        }
        res.status(200).send({message : "Product deleted successfully"})
    } catch (error) {
        res.status(500).send({message : error.message})
    }
}


module.exports = {
    getAllProduct,
    getProductById,
    updateProductById,
    deleteProductById,
    createNewProduct
}