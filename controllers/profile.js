const Location = require("../models/Location");
const Profile = require("../models/Profile");

exports.getProfiles = (req, res, next) => {
    const locationId = req.params.locationId;
    
    Location.findById(locationId)
        .populate("profiles")
        .then(result => {
            res.status(200).json({
                msg: "Success on finding all the profiles",
                locations: result
            });
        });
};

exports.addProfile = (req, res, next) => {
    const locationId = req.params.locationId;
    const name = req.body.name;
    const age = req.body.age;
    const phone = req.body.phone;
    const email = req.body.email;
    const title = req.body.title;
    const scores = req.body.scores;
    const numberOfEvents = req.body.numberOfEvents;
    let error;
    
    const profileData = new Profile({
        locationId: locationId,
        name: name,
        age: age,
        phone: phone,
        email: email,
        title: title,
        scores: scores,
        numberOfEvents: numberOfEvents
    });
    
    Location.findById(locationId)
        .then(location => {
            if(!location){
                throw new error(res.status(404).json({error: 'Location not found'}));
            }
            else{
                location.profiles.push(profileData);
                return location.save();
            }
        })
        .then(result => {
            return profileData.save();
        })
        .then(result => {
            res.status(201).json({
                msg: "Success on creating a profile",
                profile: result
            });
        })
        .catch(err => {
            return res.status(500).json({error: err});
        });
};