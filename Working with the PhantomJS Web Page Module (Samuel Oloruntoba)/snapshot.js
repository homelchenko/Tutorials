var page = require('webpage').create();

page.viewportSize = { 
    width: 1366,
    height: 667
};

page.clipRect = {
    top: 0,
    left: 0,
    width: 1024,
    height: 768
};

page.open('http://scotch.io', function(status){
    page.render('scotch.png');

    phantom.exit();
});