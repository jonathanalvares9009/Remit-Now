// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";


contract DecentralBank is Ownable {
    string public name = "DecentralBank";
    uint balance;
    mapping(address => uint) public account;

    constructor() {
        balance = 1000000;
        account[msg.sender] = balance;
    }

    function checkBalance(address acc) public view onlyOwner returns (uint) {
        return account[acc];
    }

    modifier hasBalance(address _from, uint _amount) {
        require(account[_from] > _amount, "Insufficient balance");
        _;
    }

    function transferToAccount(address _from, address _to, uint 
    _amount) public hasBalance(_from, _amount) {
        account[_to] += _amount;
        account[_from] -= _amount;
    }
}
