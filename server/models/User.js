const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
	title: String,
	color: String,
	status: {
		type: String,
		default: 'incompleted',
	},
	date: Date,
});

const UserSchema = new Schema({
	username: String,
	mail: String,
	password: {
		type: String,
		// select: false,
	},
	tasks: [TaskSchema],
});

module.exports = mongoose.model('user', UserSchema);
