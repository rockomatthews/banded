var mongoose = require("mongoose");
var User = require('userSchema');

var messageSchema = mongoose.Schema({
    sender:[User],
    reciever:[User],
    message:{
        type:string,
    },
});

mongoose.model('Message', messageSchema);
