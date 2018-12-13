const Product = require('../models/product');
const Cart = require('../models/cart');
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

exports.getProduct = (req, res, next) => {
   const prodId = req.params.productId;
   Product.findById(prodId, product => {
      res.render('shop/product-detail', {
         product: product,
         pageTitle: product.title, 
         path: '/products'
      });
   });
}

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

exports.postCart = (req, res, next) => {
   const prodId = req.body.productId;
   Product.findById(prodId, product => {
      Cart.addProduct(prodId, product.price);
   });
   res.redirect('/cart');
};

// shop/orders
exports.getOrders = (req, res, next) => {
   res.render('shop/orders', {
      path: '/orders',
      pageTitle: 'Your Orders'
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