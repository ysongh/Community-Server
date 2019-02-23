const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const locationSchema = new Schema({
    location: {
        type: String
    },
    profiles: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Profile'
        }
    ]
});

module.exports = mongoose.model('Location', locationSchema);