//http://ganeshdatta.com/2015/03/01/waterline-orm-in-express-the-correct-way/
var DBInit = {};
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
    autoCreatedAt: false,
    autoUpdatedAt: false,
    migrate: 'safe',
    attributes: {
        id: {
            type: 'text',
            primaryKey: true,
            unique: true,
        },
        name: {
            type: 'text'
        },
        password: {
            type: 'text'
        },
        createdat: {
            type: 'datetime'
        },
        updatedat: {
            type: 'datetime'
        }
    }
});

orm.loadCollection(Member);

DBInit.Init = function(app) {
    //Start Waterline passing adapters in
    try {
        orm.initialize(config, function(err, models) {
            if (err) throw err;

            app.models = models.collections;
            app.connections = models.connections;
        });
    } catch (e) {
        console.log(e);
    }
}


module.exports = DBInit;
