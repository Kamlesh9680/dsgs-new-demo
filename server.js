const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layout');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home - DSGS' });
});

app.get('/blog', (req, res) => {
    res.render('blog', { title: 'Blog - DSGS' });
});

app.get('/about-college', (req, res) => {
    res.render('about-dsgs', { title: 'About - DSGS', breadcrumb: 'DurgaDevi Saraf Global Business School' });
});

app.get('/core-faculty', (req, res) => {
    res.render('core-faculty', { title: 'Core Faculty - DSGS', breadcrumb: 'Core Faculty', currentUrl: req.url });
});

app.get('/contact-us', (req, res) => {
    res.render('contact', { title: 'Contact Us - DSGS', breadcrumb: 'Contact Us', currentUrl: req.url });
});
app.get('/pgdm-curriculum', (req, res) => {
    res.render('pgdm-curriculum', { title: 'PGDM Curriculum - DSGS', currentUrl: req.url });
});
app.get('/vision-mission', (req, res) => {
    res.render('vision-mission', { title: 'Vision Mission - DSGS', currentUrl: req.url });
});
app.get('/placement-highlights', (req, res) => {
    res.render('placement-highlights', { title: 'Placement Highlights - DSGS', breadcrumb: 'Contact Us', currentUrl: req.url });
});
app.get('/post-graduate-diploma-in-management-pgdm', (req, res) => {
    res.render('pgdm', { title: 'PGDM - DSGS', currentUrl: req.url });
});

// Start the server
app.listen(4000, () => {
    console.log(`Server is running at http://localhost:4000`);
});
