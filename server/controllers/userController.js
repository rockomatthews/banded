var User = require('../models/userSchema');

module.exports.home = function(request, response){
    User.find({}, function(err,users){
      if(err){
          console.log(err);
      }
      else{
        response.json(
            {
                users:users
            }
        );
      }
    });
}   

module.exports.login = function(request, response){
    console.log("***** SERVER",request.body,"SERVER *****")
    User.findOne({username: request.body.username}, function(err, user){
        console.log(user || err);
        if(err){
            console.log('Server error',err)
            response.json({
                errors: err
            });
        }
        else if(user&&user.validPassword(request.body.password)){
            console.log('LOGGED IN', user )
            response.json({
                _id: user._id,
                username: user.username,
            });
        }
        else if(user && !user.validPassword){
            response.json({
                errors:{
                    login:{
                        message: "Email or Password does not incorrect"
                    }
                }
            });
        }
        else {
            response.json({
                errors:{
                    login:{
                        message:"Email or Password does not exist"
                    }
                }
            });
        }
    });
}

module.exports.register = function(request, response){
    let user = new User({
        username: request.body.username,
        password: request.body.password,
    });

        user.save(function(err){
            if(err){
                console.log(err,"**User ERROR**")
                response.json({
                    errors: err
                });
            }
            else{
                response.json({
                    message: 'Successfully made a user!', user:user
                });
            }
        });
}
