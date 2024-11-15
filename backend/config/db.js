const mongoose = require('mongoose');

mongoose.connect('your_mongodb_atlas_connection_string', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));
