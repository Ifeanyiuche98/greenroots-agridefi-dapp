const { ethers } = require("hardhat");

async function main() {
  const StakePool = await ethers.getContractFactory("StakePool");
  const contract = await StakePool.deploy();
  await contract.deployed();
  console.log("StakePool deployed at:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
