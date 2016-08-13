var express = require('express');
var path = require('path');
var url = require('valid-url');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res, next){
    res.render('index');
});

router.get('/snap', function(req, res, next){
    var md5 = require('md5');
    var width = req.query.width,
        website = req.query.url;

    if (!isNaN(width) && url.isUri(website)) {
        var hash = md5(website);
        var savePath = path.join(__dirname, 'public', 'screenshots', hash) + '.png';
        var savePath = "\"" + savePath + "\"";
        var cmd = [
            'phantomjs.exe',
            'generator.js',
            website,
            savePath,
            width,
            1]
            .join(' ');
        var exec = require('child_process').exec;

        exec(cmd, function (error){
            if (error) {
                res.status(422);
                return res.json({
                    message: 'Something went wrong, try reloading the page'
                });
            }

            return res.json({ path: '/screenshots/' + hash + '.png' });
        });    
    } else {
        res.status(422);
        return res.json({ message: 'please make sure the url is valid' });
    }

});

module.exports = router;