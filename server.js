// server.js
var app = require('express')(); // Create an instance of an Express app
var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.import('./tables'); // Import tables from the ./tables directory

mobileApp.attach(app); // Attach the mobileApp to Express
app.listen(process.env.PORT || 3000); // Start the express server
