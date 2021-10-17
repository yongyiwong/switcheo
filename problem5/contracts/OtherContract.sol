// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract OtherContract {
  mapping (address => uint) balances;
  constructor() public {
    balances[tx.origin] = 5000;
  }

  function getBalance(address addr) public view returns(uint) {
		return balances[addr];
	}
}
