const mongoose = require('mongoose'); //requiring mongoose
mongoose.connect ( 'mongodb+srv://yashgadhave8:yash123@cluster0.vjyqqna.mongodb.net/hospitalApi'); //connecting to mongodb
const db = mongoose.connection; //acquiring the connection
db.on('error', console.error.bind(console, 'Error in connecting to MongoDB!')); //if error occured
db.once('open', function() {
    //if connected successfully
    console.log('Sucessfully connected to MongoDB!');
});

module.exports = db;
