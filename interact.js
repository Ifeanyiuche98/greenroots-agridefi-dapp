const { ethers } = require("hardhat");

async function interact() {
  const [deployer] = await ethers.getSigners();
  const contract = await ethers.getContractAt("StakePool", "your_contract_address");

  const tx = await contract.connect(deployer).stake({ value: ethers.utils.parseEther("0.01") });
  await tx.wait();
  console.log("Stake sent successfully");

  const stake = await contract.getStake(deployer.address);
  console.log("Current stake:", ethers.utils.formatEther(stake));
}

interact().catch(console.error);
