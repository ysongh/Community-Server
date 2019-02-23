const Location = require("../models/Location");

exports.getLocations = (req, res, next) => {
    Location.find()
        .then(result => {
            res.status(200).json({
                msg: "Success on finding all location",
                locations: result
            });
        });
};

exports.addLocation = (req, res, next) => {
    const location = req.body.location;
    
    const locationData = new Location({
        location: location
    });
    
    locationData.save()
        .then(result => {
            res.status(201).json({
                msg: "Success on adding a location",
                location: result
            });
        })
        .catch(err => {
            return res.status(500).json({error: err});
        });
};