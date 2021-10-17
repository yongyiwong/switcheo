pragma solidity >=0.4.25 <0.7.0;

// SPDX-License-Identifier: MIT

contract Counter {
    uint256 public count;

    function increment() external {
        count += 1;
    }
}
