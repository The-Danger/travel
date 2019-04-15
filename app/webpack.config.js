const path = require('path');


module.exports = {
    entry: "./scripts/app.js",
    

    output: {
        path: path.resolve(__dirname, "./temp/scripts"),
        filename: "App.js"
    }

    
}