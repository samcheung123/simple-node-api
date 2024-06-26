const express = require('express');
const Product = require('../models/product.model.js');
const router = express.Router();
const { createProduct, deleteProduct, updateProduct, getAllProduct, getProductById } = require('../controllers/product.controller.js');

// create 
router.post('/', createProduct);

// getall
router.get('/', getAllProduct);
// getbyid
router.get('/:id', getProductById);
// update/put
router.put('/:id', updateProduct);

// delete
router.delete('/:id', deleteProduct);

module.exports = router;