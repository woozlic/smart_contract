import _ from 'lodash';
// function component() {
//   const element = document.createElement('div');

// Lodash, currently included via a script, is required for this line to work
// element.innerHTML = _.join(['Hello', 'webpack'], ' ');

// return element;
// }

// document.body.appendChild(component());

const contract_address = "0xa64f148865D0867110364928DFE7BdC18c9Dd02D";
const data = require('../../contracts/artifacts/Storage_metadata.json');
const Web3 = require('web3');
const web3 = new Web3();

const abi = data['output']['abi'];
let contract;
window.addEventListener('load', () => {
    if (typeof (web3) === 'undefined') {
        return console.log("Metamask is not installed");
    }
    contract = web3.eth.contract(abi).at(contract_address);
    contract.message.call((error, result) => {
        if (error) {
            return console.log(error);
        }
        $('#message').text(result);
    });
});

function setMessage() {
    let message = $('#new_message').val();
    contract.setMessage.sendTransaction(
        message,
        {gasPrice: web3.toWei(4.1, 'Gwei')},
        (error, result) => {
            if (error) {
                return console.log(error);
            }
            console.log("txhash: " + result);
        }
    );
}