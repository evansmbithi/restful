import express from 'express';
import routes from './src/routes/crmRoutes.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000; //port number

// mongooose connection between mongodb and the API
// .Promise - wait for result while connecting to mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    // avoid any errors upon connection
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyParser connection
// parse requests coming in to API readable format
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// call the routes function from src/routes/crmRoutes.js
routes(app);

// serve static files (images,pdf,movies) from the public folder
// any files that are in the static folder will be available to any frontend that needs it.
app.use(express.static('public'));

// GET the root of the server
// server to send back a response "running on port 4000"
app.get('/', (req, res) => 
res.send(`Node and express server running on port ${PORT}`)
);

// send a message to the client about the port number
app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);