pragma solidity >=0.4.25 <0.7.0;

// SPDX-License-Identifier: MIT

interface ICounter {
    function count() external view returns (uint256);

    function increment() external;
}

contract Interaction {
    address counterAddr;

    function setCounterAddr(address _counter) public payable {
        counterAddr = _counter;
    }

    function getCount() external view returns (uint256) {
        return ICounter(counterAddr).count();
    }

    function getCount2(address addr) external view returns (uint256) {
        return ICounter(addr).count();
    }
}
