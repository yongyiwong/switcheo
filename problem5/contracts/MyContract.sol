// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

pragma experimental ABIEncoderV2;

interface IOhterContract {
    function getBalance(address addr) external view returns (uint256);
}

contract MyContract {
    struct TokenBalance {
        address token;
        uint256 balance;
    }

    mapping(address => uint256) balances;

    constructor() public {
        balances[tx.origin] = 10000;
    }

    function getBalance(address addr) public view returns (uint256) {
        return balances[addr];
    }

    function getBalances(address addrAccount, address[] memory addrsContract)
        public
        view
        returns (TokenBalance[] memory)
    {
        TokenBalance[] memory tokenBalances = new TokenBalance[](addrsContract.length);

        uint256 balance;

        for (uint256 index = 0; index < addrsContract.length; index++) {
            balance = IOhterContract(addrsContract[index]).getBalance(
                addrAccount
            );

            TokenBalance memory tokenBalance = TokenBalance({
                token: addrsContract[index],
                balance: balance
            });

            tokenBalances[index] = tokenBalance;
        }

        return tokenBalances;
    }
}
