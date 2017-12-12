(function(global, $){

    function Greetr(firstName, lastName, language){
        return new G$.init(firstName, lastName, language);
    }

    Greetr.init = function(firstName, lastName, language) {
        this.firstName = firstName || '';
        this.lastName = lastName || '';
        this.language = language || 'en';
    }

    Greetr.prototype = {

    };

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

}(window, $));