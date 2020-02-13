const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FeedSchema = new Schema({
	image: {
		type: String
    },
    fishname: {
        type: String,
        required: true
    },
    description: {
		type: String,
		required: true
	},
	hashtags: {
		type: Array
	},
	likes: {
		type: Number,
		default: 0
	},
	date: {
		type: Date,
		default: Date.now
	}
});

const FeedModel = mongoose.model("feed", FeedSchema);
module.exports = FeedModel;
