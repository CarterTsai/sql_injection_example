var express = require('express');
var router = express.Router();

var Waterline = require('waterline');
var PostgresSqlAdapter = require('sails-postgresql');
var orm = new Waterline();

var config = {
    adapters: {
        postgre: PostgresSqlAdapter
    },
    connections: {
        postgresql: {
            adapter: 'postgre',
            database: 'test',
            host: '192.168.99.100',
            user: 'postgres',
            password: '',
            port: 5432,
            poolSize: 10,
            ssl: false
        }
    }
};

var Member = Waterline.Collection.extend({
    identity: 'member',
    connection: 'postgresql',
    attributes: {
       name: 'string',
       password: 'string',
    }
});

orm.loadCollection(Member);

/* GET home page. */
router.get('/', function(req, res, next) {
    try {
        orm.initialize(config, function(err, models) {
            if (err) throw err;
            console.log(models);
        });
    } catch (e) {
        console.log(e);
    }
    res.render('index', { title: 'Express' });
});

module.exports = router;
