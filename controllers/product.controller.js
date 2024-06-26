const express = require('express');
const Product = require('../models/product.model.js');

//create/POST
const createProduct =  async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//get all/GET
const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//get by id/GET
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};
//update/UPDATE
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// delete/DELETE
const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        await Product.findByIdAndDelete(id);
        res.status(200).json({message: "Product deleted!"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//
module.exports = {
    createProduct,
    getAllProduct,
    getProductById,
    updateProduct,
    deleteProduct
};