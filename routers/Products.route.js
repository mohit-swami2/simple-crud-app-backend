const express = require('express')
const router = express.Router()
const {getAllProduct,createNewProduct,getProductById,updateProductById,deleteProductById} = require('../controller/Product.controller')
// to get all the products
router.get('/' , getAllProduct);
router.post('/' , createNewProduct)
// to get Product with the id 
router.get('/:id',getProductById )
// update the product 
router.put('/:id' , updateProductById)
// delete the product 
router.delete('/:id', deleteProductById)
module.exports = router;