var mongoose = require('mongoose');
var Schema = mongoose.Schema;
UserSchema = new Schema({
	username: {
		type: String,
	 	required: [true, 'Username is required'], 
	 	maxlength: [20, 'Your username is too long'],
	 	minlength: [3, 'Your username is too short']
	},
	
},{timestamps: true});


var User = mongoose.model('User', UserSchema);

User.schema.path('username').validate(function alphanum (value) {
    return /^[a-z\d\_]+$/i.test(value);
  }, 'Username must be numbers and letters only');




