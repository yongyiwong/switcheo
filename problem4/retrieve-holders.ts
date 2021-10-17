import { ethers } from 'ethers';
import * as numeral from 'numeral';

const addressContract = '0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c';

// This can be an address or an ENS name
const addresses = [
  "0x123d475e13aa54a43a7421d94caa4459da021c77",
  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
  "0xfe808b079187cc460f47374580f5fb47c82b87a5"
];

const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org/");
//const provider = ethers.providers.getDefaultProvider();

const test = async () => {
  const abi = [
    "function name() view returns (string)",
    "function balanceOf(address owner) view returns (uint256)",
    "function decimals() view returns (uint8)",
    "function symbol() view returns (string)",

    // Authenticated Functions
    "function transfer(address to, uint amount) returns (bool)",

    // Events
    "event Transfer(address indexed from, address indexed to, uint amount)"
  ];

  const contract = new ethers.Contract(addressContract, abi, provider);

  for (const address of addresses) {
    const balance = await contract.balanceOf(address);
    const balanceF = ethers.utils.formatUnits(balance, 8);

    console.log(address, numeral(balanceF).format('0,0[.]00000000'));
  }
}


test().then();