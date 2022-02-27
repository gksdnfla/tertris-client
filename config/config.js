const webpackDevConfig = require('./webpack.dev.js');
const webpackProdConfig = require('./webpack.prod.js');

const ENV = process.env.NODE_ENV;
let config = {};

if (ENV === 'development') {
    config = webpackDevConfig;
} else {
    config = webpackProdConfig;
}

module.exports = {
    mode: process.env.NODE_ENV,
    ...config,
};