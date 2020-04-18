const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: outputPath,
    },
    // モジュールの適応
    //test->対象のファイル
    //ues->使用するローダー(※読み込む順番に注意:A chain is excuted in reverse order.)
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', //2.読み込んだcssをstyleタグに適応する
                    'css-loader', //1.cssファイルを読み込む
                ]
            },
            {
                test: /\.(jpe?g|png|svg|ico)$/i,
                loader: 'url-loader',
                //file-loader
                //ファイルサイズがlimitを超えた場合、別ファイルとして切り出す設定
                options: {
                    limit: 2048,
                    name: './images/[name].[ext]'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', //3.読み込んだcssをstyleタグに適応する
                    'css-loader',   //2.cssファイルを読み込む
                    'sass-loader'   //1.scssファイルをコンパイルする
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ],
    },
    //ドキュメントルートの設定
    devServer: {
        contentBase: outputPath
    },
    //プラグインの設定(インスタンスの設定) 
    plugins: [
        //雛形ファイルとファイル名を設定する
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
        })
    ]
}