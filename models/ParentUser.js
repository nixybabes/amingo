const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ParentSchema = new Schema({
	title: {
		type: String,
		required: true
	},
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
	phonenumber: { // if you have a seperate field for country code selection can you merge this with the number or it needs to be seperate?
		type: Number,
		required: true
	},
	address: { // if you have multiple boxes for the address (street, city etc) can you merge these all in to 1 string or array, or do you keep them seperate?
		type: String,
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
	date: {
		type: Date,
		default: Date.now
	}
});

const ParentModel = mongoose.model("parent", ParentSchema);
module.exports = ParentModel;