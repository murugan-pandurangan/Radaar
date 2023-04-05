const express = require('express');
const router = express.Router({ mergeParams: true });

router.get('/test', (req, res) => {
    res.jsonp({name: 'John Smith'});
});

router.get('/', (req, res) => {
    res.jsonp({name: 'Test'});
}),

module.exports = router;