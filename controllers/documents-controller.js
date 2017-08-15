module.exports = function() {
    function get1(req, res) {
        res.sendfile('./data/BITZER_PRICE2017.pdf');
    }

    function get2(req, res) {
        res.sendfile('./data/COLD_ROOMS_KIT_NEW_062017.pdf');
    }

    function get3(req, res) {
        res.sendfile('./data/COLD-FLEX_Price2017.pdf');
    }

    function get4(req, res) {
        res.sendfile('./data/Thermobox_PRICE2017_may.pdf');
    }

    return {
        get1: get1,
        get2: get2,
        get3: get3,
        get4: get4
    }
};