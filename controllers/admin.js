const Product = require('../models/product');

//Get admin/add-product
exports.getAddProduct = (req, res, next) => {
   res.render('admin/add-product', { 
      pageTitle: 'Add Product', 
      path: '/admin/add-product', 
      formCSS: true, 
      productCSS: true, 
      activeAddProduct: true 
   });
};

//Post admin/add-product
exports.postAddProduct = (req, res, next) => {
   const product = new Product(req.body.title);
   product.save();
   res.redirect('/');
};

// admin/products
exports.getProducts = (req, res, next) => {
   Product.fetchAll(products => {
      res.render('admin/products', {
         prods: products,
         pageTitle: 'Admin Products',
         path: '/admin/products'
      });
   });
};

// admin/edit-product
/*
exports.postEditProduct = (req, res, next) => {
   const product = new Product(req.body.title);
   product.save();
   res.redirect('/');
}
*/