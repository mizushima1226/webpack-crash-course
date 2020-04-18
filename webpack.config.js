const path = require('path');

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
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            }
        ],
    },
    //ドキュメントルートの設定
    devServer: {
        contentBase: outputPath
    }
}