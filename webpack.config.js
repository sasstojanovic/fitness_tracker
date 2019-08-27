var webpack = require("webpack");
const path = require("path");
const devMode = process.env.NODE_ENV !== 'production';
module.exports = {
    entry: {
        index: "./src/js/index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist/js"),
        filename: "[name].bundle.js"
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader',
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }

        ]
    },
    devServer: {
        inline: true,
        contentBase: "./dist",
        port: 3000
    },
    mode: devMode ? 'development' : 'production'
};