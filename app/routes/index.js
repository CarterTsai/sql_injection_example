var express = require('express');
var router = express.Router();
// http://ganeshdatta.com/2015/03/01/waterline-orm-in-express-the-correct-way/

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    var member = req.app.models.member;
    var id = req.body['id'];
    member.find({'id':id}).exec(function(err, models) {
        if(err) {
            console.log(err);
        }

        res.json(models);

        console.log(models);

    });
});

module.exports = router;
