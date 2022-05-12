const ethers = require('ethers');

async function main() {

  // Ganache RPC server URL
  const url = "HTTP://127.0.0.1:7545"; 

  // connect to our local Ganache blockchain
  const provider = new ethers.providers.JsonRpcProvider(url);

  // copy-paste a private key from a Ganache account!
  const privateKey = "9ceee2362d718e754bc5537297dfdf98905710061cc57c61c26c831d388cfec7"; 

  // let's create a Wallet instance so that our sender can... send!
  const wallet = new ethers.Wallet(privateKey, provider);

  // getting the accounts + balances
  const signer0 = provider.getSigner(0); // account we will send eth to
  const addr0 = await signer0.getAddress();
  const walletBalance = await wallet.getBalance();

  console.log(
    "Balance of sender address before tx: " + ethers.utils.formatEther(walletBalance)
  );

  console.log(
    "Sending ether from " + wallet.address + " to " + addr0
  );
  
  const tx = await wallet.sendTransaction({
    to: addr0,
    value: ethers.utils.parseEther('1.0'),
  });

  // waits for the tx to be mined so that any subsequent queries are accurate
  const receipt = await tx.wait();
  const balanceAfter = await wallet.getBalance();
  console.log(
    "Balance of sender address after tx: " + ethers.utils.formatEther(balanceAfter)
  );

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});