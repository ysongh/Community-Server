const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const profileSchema = new Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    title: {
        type: String
    },
    scores: {
        type: Number
    },
    numberOfEvents: {
        type: Number
    },
    imageURL: {
        type: String
    },
    locationId: {
        type: Schema.Types.ObjectId,
        ref: 'Location'
    }
});

module.exports = mongoose.model('Profile', profileSchema);