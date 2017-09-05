//Dependencies
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import open from 'open';

//webpack configuration
import webpackConfig from '../../webpack.config.babel';

//server port
const port = 3000;

//Enviroment
const isDevelopment = process.env.NODE_ENV != 'production';

// Express app
const app =  express();

//Public
app.use(express.static(path.join(__dirname, '../public')));

// webpack compiler
const webpackCompiler = webpack(webpackConfig);

if(isDevelopment) {
	app.use(webpackDevMiddleware(webpackCompiler));
	app.use(webpackHotMiddleware(webpackCompiler));
}

// Sending all traffic to React
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Listen port
app.listen(port, err => {
	if(!err) {
		open('http://localhost:${port}');
	}
});