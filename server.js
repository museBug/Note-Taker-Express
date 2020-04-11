//Dependencies
const express = require('express');

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port.
const PORT = process.env.PORT || 3000;

// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require(`./routes/htmlRoutes`);

 // Sets up the Express app to handle data parsing
 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());
 app.use(express.static("public"));


 app.use("/api", apiRoutes);  
 app.use("/", htmlRoutes); 

// LISTENER
// The below code effectively "starts" our server
 app.listen(PORT, () => {
     console.log(`Listening on port: ${PORT}`);
 });