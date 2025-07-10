GreenRoots DApp – Developer Onboarding

   

Welcome to the GreenRoots AgriDeFi project – empowering Africa's farming sector through decentralized finance and blockchain innovation.


---

🌱 Project Overview

GreenRoots is a decentralized platform enabling:

Tokenized support of smart farm units

Community-based produce redemption

Train-to-earn agri-tech programs

DAO governance for ecosystem decisions


Built on BNB Smart Chain, it uses the $ROOT token to connect blockchain users with real-life agricultural outcomes.


---

💻 Tech Stack

Layer	Tool

Blockchain	Solidity, BNB Smart Chain
Backend	Node.js, Firebase or MongoDB
Frontend	React + Web3.js or ThirdWeb
DevOps	Hardhat, Ethers.js



---

🔧 Local Setup (Dev)

# Clone repository
$ git clone https://github.com/YOUR_USERNAME/greenroots-agridefi-dapp.git

# Navigate and install deps
$ cd greenroots-agridefi-dapp
$ npm install

# Setup .env
BNB_TESTNET_RPC=https://data-seed-prebsc-1-s1.binance.org:8545/
PRIVATE_KEY=your_wallet_private_key


---

📜 Smart Contract Deployment

# Compile Contracts
$ npx hardhat compile

# Deploy to BNB Testnet
$ npx hardhat run scripts/deploy.js --network bnbTestnet


---

⚙️ Simulate Interaction

# Send test stake to StakePool contract
$ npx hardhat run scripts/interact.js --network bnbTestnet


---

🗂 Contract Modules

Contract	Purpose

StakePool.sol	Token staking into farm units
Redemption.sol	Produce redemption
TrainingReward.sol	Claim rewards for training
DAOController.sol	Community voting and proposals
AirdropDistributor	Claim airdrops or grants



---

📡 Useful Testnet Tools

Faucet: BNB Testnet Faucet

Block Explorer: BscScan Testnet

Wallet: MetaMask (add BNB Testnet)



---

🧠 Contributing

We welcome contributors and advisors! To get started:

Fork this repo and make a pull request

Join our dev DAO discussion group (coming soon)

Suggest proposals via the GreenRoots DAO UI



---

🤝 License

MIT License © 2025 GreenRoots Network


---

🔗 Contact

Founder: Ifeanyi Raymond Uche

Email: ifeanyiraymonduche98@gmail.com

Telegram: @bunt789

Twitter: @Ifeanyi22324210


