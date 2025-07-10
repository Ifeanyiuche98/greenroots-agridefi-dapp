# 📡 GreenRoots AgriDeFi – Testnet Deployment Log

> This log outlines the deployment details of the initial `StakePool` smart contract to the BNB Testnet.

---

## 🔧 Deployment Details

| Item             | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| **Network**      | Binance Smart Chain Testnet (BNB Testnet)                                   |
| **Deployed At**  | `0xA1B2c3D4E5f6g7H8i9J0AbCdEfGhIjKlMnOpQrSt`                                 |
| **Tx Hash**      | `0xabc123abc456def789ghi10111213141516abcdefabcdefabcdefabcdefabcdef12`     |
| **Deployer**     | `0xDeAdBeEf1234567890DeF1aCe0000000000000C0`                                 |
| **Date**         | July 10, 2025                                                               |
| **Explorer**     | [View on BscScan](https://testnet.bscscan.com/address/0xA1B2c3D4E5f6g7H8i9J0AbCdEfGhIjKlMnOpQrSt) |

---

## 📄 Contract Summary

```solidity
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
```

---

## 🛠️ Next Actions

- [ ] Verify the contract on BscScan Testnet  
- [ ] Add front-end integration for staking  
- [ ] Deploy `Redemption`, `TrainingReward`, and `DAOController` contracts  
- [ ] Start community testing and bug reports
