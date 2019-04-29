const path = require('path');


module.exports = {
    entry: {
        App: './scripts/app.js',
        Vendor: './scripts/vendor.js'

    },
    

    output: {
       //path: path.resolve(__dirname, "./temp/scripts"),
        //filename: "[name].js"
        filename: '[name].js',
      path: './temp/scripts'
     
    }

    
}