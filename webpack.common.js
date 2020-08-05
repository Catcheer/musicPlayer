/*
 * @Description:
 * @Author: zhangchuangye
 * @Date: 2020-07-28 18:51:56
 */

const path = require("path");


module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      // { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      // { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
         
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env",'@babel/preset-react'],
            },
          }
        ],
      },
      
      {
        test: /\.(css|less)$/,
        use:[
            'style-loader',
            'css-loader',
           {
            loader: 'postcss-loader',
            options: {
              indet: 'postcss',
              sourceMap: true,
              plugins: (loader) => [
                  require('autoprefixer')({overrideBrowserslist: ['> 0.15% in CN']})
              ]
            }

           },
            'less-loader'
        ]
      },
      
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test:/\.(jpg|jpeg|png|gif)$/,
        include:path.resolve(__dirname, 'src'),
        use:[{
          loader:'url-loader',
          options:{
            limit: 8192,
            esModule: false,
            name:'[name]-[hash].[ext]'
          }
        }]
      },{
        test:/\.html$/,
        use:[{
          loader:'html-loader',
        }]
      }
    ],
  },

//   externals: {
//     "react": "React",
//     "react-dom": "ReactDOM"
// },
 
};
