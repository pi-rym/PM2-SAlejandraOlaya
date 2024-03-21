module.exports = {
    entry: {
        index: "./scripts/index.js", 
        films: "./scripts/validations.js"
    
},
    output: {
        path: __dirname + "/browser",
        filename: "[name].js",
    }
}