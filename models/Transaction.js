const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
	transactiondate: {
		type: Date,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	description: {
		type: Date,
		required: true
	},
	amount: {
		type: Number,
		required: true
	},
	addeddate: {
		type: Date,
		default: Date.now
	}
});

const TransactionModel = mongoose.model("transactions", TransactionSchema);
module.exports = TransactionModel;