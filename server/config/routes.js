var users = require("../controllers/userController");
var messages = require("../controllers/messageController");

module.exports = function(app){
    // Users
    app.get('/', (req, res) => { res.status(200).send('Hello from the server'); });
    app.post('/api/users',users.register);
    app.post('/api/users/authenticate',users.login);
    app.get('/api/users',users.home);
}