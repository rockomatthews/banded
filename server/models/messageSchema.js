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

mongoose.model('Message', messageSchema);