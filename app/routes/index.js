var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var member = req.app.models.member;
    member.find().exec(function(err, models) {
        if(err) {
            console.log(err);
        }

        console.log(models);

    });
    res.render('index', { title: 'Express' });
});

module.exports = router;
