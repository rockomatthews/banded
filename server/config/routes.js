var users = require("../controllers/userController");
var messages = require("../controllers/messageController");

module.exports = function(app){
    // Users
    app.post('/api/users',users.register);
    app.post('/api/users/authenticate',users.login);
    app.get('/api/users',users.home)    

    //Messages

    // app.get('/api/messages/+id',messages.show);

}