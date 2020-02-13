const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
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
	date: {
		type: Date,
		default: Date.now
	}
});

const TransactionModel = mongoose.model("transactions", TransactionSchema);
module.exports = TransactionModel;