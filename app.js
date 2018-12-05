const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
//app.set('views', 'views');

// Get html pages
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/admin', adminData.routes);
app.use(shopRoutes);

// 404 Page not found route
app.use((req, res, next) => {
   res.status(404).render('404');
});

// Server listen on port 3000
app.listen(3000);
