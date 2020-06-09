var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'PS3', message: '1. Try type something in the url for example: http://localhost:3000/hello \n' + '2. Try parsing something using Postman' })
});

//This is solution to 1b since it can be anything, you simply just type anything and it iwll render that string
// to Pug template
router.get('/:id', function(req, res, next) {
    res.render('get', { string:req.params.id})
});

//this solution to 1c

router.post('/', function(req, res, next) {
    let id = req.body.string;
    res.render('post', {string:id, length: id.length})
});


module.exports = router;
