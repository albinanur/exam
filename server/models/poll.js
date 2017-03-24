var mongoose = require('mongoose');
var Schema = mongoose.Schema;
PollSchema = new Schema({
	question: {
		type:String, 
		required:true, 
		minlength: [8, 'Your question should be at least 8 characters'],
	},
	option1 : {
		type:String, 
		required:true, 
		minlength: [3, 'Your option should be at least 3 characters'],
		
	},	
	option2 : {
		type:String, 
		required:true, 
		minlength: [3, 'Your option should be at least 3 characters'],
	},
	option3 : {
		type:String, 
		required:true, 
		minlength: [3, 'Your option should be at least 3 characters']
	},
	option4 : {
		type:String, 
		required:true, 
		minlength: [3, 'Your option should be at least 3 characters']
	},
	option1_votes: {type: Number, default: 0},
	option2_votes: {type: Number, default: 0}, 
	option3_votes: {type: Number, default: 0}, 
	option4_votes: {type: Number, default: 0},
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	
},{timestamps: true});


var Poll = mongoose.model('Poll', PollSchema);




