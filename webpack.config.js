const path = require("path")
module.exports = {
	entry:path.join(__dirname,'./src/index.js'),
	output: {
		path:__dirname,
		filename: './release/bundel.js'
	},
	module: {
		rules: [{
			test:/\.js?$/,
			exclude:/(node_modules)/,
			loader: 'babel-loader',
			query:{
				presets:['latest']
			}
		}]
	}
}