const expressSession = require('express-session');

const botJsonControllers = {
    getAll: function(req, res) {
        res.status(200).json({
            result: JSON.parse(expressSession.dataArray)
        });
    },
    getOne: function(req, res) {
        let id = req.params.id;
        let dataJson = JSON.parse(expressSession.dataArray)[id];
        res.status(200).json({
            result: dataJson
        });
    }
}

module.exports = botJsonControllers;
