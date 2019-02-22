let path = require('path')
let glob = require('glob')
const vConsolePlugin = require('vconsole-webpack-plugin'); // 引入 移动端模拟开发者工具 插件 （另：https://github.com/liriliri/eruda）


function resolve (dir) {
    return path.join(__dirname, dir)
}

let pageNum=0
//配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath) {
  let [entries,basename]=[{},'']

	glob.sync(globPath).forEach(function(entry,i) {
		basename = path.basename(entry, path.extname(entry));

		pathname = basename; // 正确输出js和html的路径

		let filename=entry.split('./src/pages/')[1]
		let middlePath=filename.split('/index.html')[0]

		let dirList=middlePath.split("/")

		entries[i+'-'+dirList[dirList.length-1]] = {
			entry: 'src/pages/' + middlePath + '/main.js',
			template: 'src/pages/' + middlePath + '/index.html',
			filename,
		}

		pageNum=i
  })
  
  return entries
}

let pages = getEntry('./src/pages/**/index.html');

module.exports = {
	css: {
		// 是否使用css分离插件 ExtractTextPlugin
		extract: true,
		// 开启 CSS source maps?
		sourceMap: false,
		// css预设器配置项
		loaderOptions: {},
		// 启用 CSS modules for all css / pre-processor files.
		modules: false
    },
  
	devServer: {
		hot:true
    },
  
	productionSourceMap: false,

	configureWebpack: config => {
		//非生产环境
		let pluginsDev = [
			//移动端模拟开发者工具(https://github.com/diamont1001/vconsole-webpack-plugin  https://github.com/Tencent/vConsole)
			new vConsolePlugin({
				filter: [], // 需要过滤的入口文件
				enable: true
			}),
		];

		if(process.env.NODE_ENV !== 'production') {
			config.plugins = [...config.plugins, ...pluginsDev];
		} 
	},
	
	chainWebpack: (config)=>{
		// 图片压缩
		config.module
			.rule('images')
			.use('image-webpack-loader')
			.loader('image-webpack-loader')

		config.resolve.alias
			.set('@', resolve('src'))
			.set('assets',resolve('src/assets'))
			.set('components',resolve('src/components'))
			.set('utils',resolve('src/utils'))

		// 公共资源提取，
		// vendors提取的是第三方公共库(满足提取规则的node_modules里面的且页面引入的)，这些文件会打到dist/js/chunk-vendors.js里面
		// 提取规则是每个页面都引入的才会打到chunk-vendors.js里面(如vue.js)
		// 控制条件是minChunks字段，所以该字段的值是当前activity/src/projects里面的html的个数
		// common提取的应该是除了vendors提取后，剩余的满足条件的公共静态模块
		// 我们的项目不需要common，所以将common置为{}，覆盖默认common配置
		config.optimization.splitChunks({
			cacheGroups: {
				vendors: {
					name: 'chunk-vendors',
					minChunks: pageNum,
					test: /node_modules/,
					priority: -10,
					chunks: 'initial'
				},
				common: {}
			}
		})
	},

	devServer: {
		disableHostCheck: true
	},

	pages
}

