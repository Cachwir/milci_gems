const express = require('express'); // framework
const cors = require('cors');
const mongoose = require('mongoose'); // ORM
var helmet = require('helmet'); // for security
const config = require('./config');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(helmet());

const databaseConfig = config.database;
const uri = 'mongodb://'+ databaseConfig.user +':'+ databaseConfig.password +'@'+ databaseConfig.host +':'+ databaseConfig.port +'/'+ databaseConfig.database + '?authSource=admin';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    })
    .then(function(db){

    // do whatever you want
    })
    .catch(function(error) {
        console.log(error);
    });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);

    const postsRouter = require('./routes/posts');

    app.use('/posts', postsRouter);
});