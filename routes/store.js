const express = require('express');
const router = express.Router();
const Product = require('../models/products');
// const fs = require('fs');

// let rawdata = fs.readFileSync('data.json');
// let products = JSON.parse(rawdata);
// console.log(products)

router.get('/',(req, res, next) => {
    // if (req.query.search === undefined) {
    //     req.query.search = ""
    // }
    Product.find()
        .then(products => {
            res.render('pages/products', { 
                title: 'My Store', 
                path: '/store', // For pug, EJS 
                products: products,
                // search: req.query.search
            });
        });  
});

router.get('/:id/details',(req, res, next) => {
    Product.findById(req.params.id)
        .then(product => {
            res.render('pages/details', {
                title: 'Details', 
                path: '/store',
                product: product
            })
        }) 
});

module.exports = router;