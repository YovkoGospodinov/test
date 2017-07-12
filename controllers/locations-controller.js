module.exports = function(db) {
    function get(req, res) {
        var locations = db.get("locations");

        res.json({
            locations: locations
        });
    }

    return {
        get: get
    }
};