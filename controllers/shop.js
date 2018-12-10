const Product = require('../models/product');

// shop/product-list
exports.getProducts = ( req, res, next) => {
   Product.fetchAll(products => {
      res.render('shop/product-list', {
         prods: products,
         pageTitle: 'All Products',
         path: '/products'
      });
   });
};

// shop/index
exports.getIndex = (req, res, next) => {
   Product.fetchAll(products => {
      res.render('shop/index', {
         prods: products,
         pageTitle: 'Shop',
         path: '/'
      });
   });
}

// shop/cart
exports.getCart = (req, res, next) => {
   res.render('shop/cart', {
      path: '/cart',
      pageTitle: 'Your Cart'
   });
}

// shop/checkout
exports.getCheckout = (req, res, next) => {
   res.render('shop/checkout', {
      path: '/checkout',
      pageTitle: 'Checkout'
   });
}

// shop/product-detail
exports.getProductDetails = (req, res, next) => {
   res.render('shop/product-detail', {
      prods: products,
      pageTitle: 'Product details'
   });
}