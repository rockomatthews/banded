const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/banded", { useMongoClient: true })
.then(() => {
    console.log('Connected to DB');
});