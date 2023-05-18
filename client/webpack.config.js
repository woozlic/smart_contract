const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { template } = require("lodash");
module.exports = {
    module: {
        rules: [
            {
                test: /\.sol$/,
                rules: ['web3', 'solc']
            }
        ]
    },
    web3Loader: {
        // Web3
        provider: '"wss://eth-mainnet.g.alchemy.com/v2/r5WGZpEkZN0sd4TVdmWmJvSUCXWka9ud',

        // For deployment
        from: '0xFfA57D3e88A24311565C9929F180739E43FBD0aA',
        gasLimit: 100000,

        // Specify contract constructor parameters, if any.
        // constructorParams: {
        //   ContractOne: [ 'param1_value', 'param2_value' ]
        // }
        constructorParams: {},

        // To use deployed contracts instead of redeploying, include contract addresses in config
        // deployedContracts: {
        //   ContractOne: '0x...........',
        //   ContractTwo: '0x...........',
        // }
        deployedContracts: {}
    },
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
    }
    )],
};