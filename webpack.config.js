//Webpack config
module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test:/\.js$/,
                exclude: '/node_modules',
                loader: 'babel-loader'
            },
            {
                test:/\.styl$/,
                exclude: '/node_modules',
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test:/\.css$/,
                exclude: '/node_modules',
                loader: 'style-loader!css-loader'
            },
            {
                test:/\.html$/,
                exclude: '/node_modules',
                loader: 'raw-loader'
            }
        ]
    }
};