const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChildSchema = new Schema({
	firstname: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	dateofbirth: {
		type: Date,
		required: true
	},
	phonenumber: {
		type: Number,
		required: true
	},
    email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	createddate: {
		type: Date,
		default: Date.now
	}
});

const ChildModel = mongoose.model("children", ChildSchema);
module.exports = ChildModel;