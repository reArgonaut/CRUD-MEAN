const mongoose = require('mongoose');
//mongodb+srv://Adrian:adrian@todo-py3xn.mongodb.net/test

mongoose.connect('Key', (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;





