const express = require("express");
const app = express();
const connectToDatabase = require("./config/connectToDataBase");
const cors = require("cors");
const path = require("path");

//Configuration to read the env file
const dotenv = require("dotenv");
dotenv.config();

//Function that connects express app to database
connectToDatabase();

//We prevent from cors policy warning
app.use(cors());

//Allows us to use body json thing to create posts
app.use(express.json({ extended: false }));

//Routes
app.use("/api/posts", require("./routes/posts.js"));
app.use("/api/users", require("./routes/users.js"));

//We specified variable on which port our app will run (depends if heroku will give us port or we specify on 5000)
let PORT = process.env.PORT || 5000;

    // Serve any static files
    app.use(express.static(path.join(__dirname, 'frontend/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
    });


//Method to specify on which port we want our app to be with callback function to see if method works
app.listen(PORT, () => console.log(`Server is on port: ${PORT}`));
