var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json([{
        id: 1,
        username: "brettk"
    },{
        id: 2,
        username: "spiderman"
    }, {
        id: 3,
        username: "dianaprince"
    }])
})

router.post('/', function(req, res, next) {
    res.json([{
        id: 1,
        username: "brettk"
    },{
        id: 2,
        username: "spiderman"
    }, {
        id: 3,
        username: "dianaprince"
    }])
})

module.exports = router