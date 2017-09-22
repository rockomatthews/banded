var mongoose = require('mongoose');
// var bcrypt = require("bcrypt");

var userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        // unique: true,
    },
    email:{
        type: String,
        // required: true,
        // unique: true,
        // validate: {
        //     validator: function(value){
        //         return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
        //     },
        //     message: "Email is invalid. Do better."
        // },
    },
    motto:{
        type: String,
        minlength:6,
    },
    password:{
        type: String,
        require: false,
        minlength: 2
    },
});

userSchema.methods.validPassword = function(password){
    // return compareSync(password, this.password);
    return password == this.password;
}
  

module.exports = mongoose.model('User', userSchema);
