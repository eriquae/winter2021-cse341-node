const express = require('express');
const router = express.Router();
const fs = require('fs');

let rawdata = fs.readFileSync('data.json');
let products = JSON.parse(rawdata);
console.log(products)

router.get('/',(req, res, next) => {
    if (req.query.search === undefined) {
        req.query.search = ""
    }
    
    res.render('pages/store', { 
        title: 'My Store', 
        path: '/store', // For pug, EJS 
        products: products,
        search: req.query.search
    });
});

router.get('/:id/details',(req, res, next) => {
    res.render('pages/details', {
        title: 'Details', 
        path: '/store',
        product: products[req.params.id]
    })
});

module.exports = router;