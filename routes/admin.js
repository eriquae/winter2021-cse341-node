const express = require('express');
const router = express.Router();
const Product = require('../models/products');

router.get('/',(req, res, next) => {
    res.redirect('/admin/products');
});

router.get('/products',(req, res, next) => {
    Product.find()
        .then(products => {
            res.render('pages/products', {
                title: 'Products',
                path: '/admin',
                extended_path: '/products',
                products: products
            });
        });
});

router.get('/product/:id/delete',(req, res, next) => {
    Product.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/admin/products');
        });
});

router.get('/product/:id/update',(req, res, next) => {
    Product.findById(req.params.id)
        .then(product => {
            res.render('pages/updateProduct', {
                title: 'Update Product',
                path: '/admin',
                product: product
            })
        })  
});


router.post('/product/:id/update',(req, res, next) => {
    const name = req.body.name;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;

    Product
        .findByIdAndUpdate(req.params.id, {
            name: name, 
            price: price,
            description: description, 
            imageUrl: imageUrl
        })
        .then(() => {
            res.redirect('/admin/products');
        });
});

router.get('/addProduct',(req, res, next) => {
    res.render('pages/addProduct', {
        title: 'Add Product', 
        path: '/admin',
        extended_path: '/addProduct'
    })
});

router.post('/addProduct',(req, res, next) => {
    const name = req.body.name;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product({
        name: name, 
        price: price,
        description: description, 
        imageUrl: imageUrl
    });
    product
        .save()
        .then(result => {
            res.redirect('/admin/products');
        });
});

module.exports = router;