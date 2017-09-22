var mongoose = require("mongoose");
var User = mongoose.model("User");

var messageSchema = mongoose.Schema({
    sender:{
        ref: 'User',
        require: true       
    },
    reciever:{
        ref: 'User',
        require: true
    },
    message:{
        type:string,
    }
});

module.exports = mongoose.model('Message', messageSchema);