// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract StakePool {
    mapping(address => uint256) public stakes;

    function stake() external payable {
        require(msg.value > 0, "Send BNB to stake");
        stakes[msg.sender] += msg.value;
    }

    function getStake(address user) external view returns (uint256) {
        return stakes[user];
    }
}
