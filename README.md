# ethersjs
1. 以太币单位转换：`ethers.utils.parseUnits()`
    ```javascript
    const { utils } = require('ethers');

    const oneEther = utils.parseUnits('1', 'ether');
    const oneBillionGwei = utils.parseUnits('1000000000', 'gwei');

    console.log(oneEther.eq(oneBillionGwei)); // true

    const oneGwei = utils.parseUnits('1', 'gwei');
    const oneBillionWei = utils.parseUnits('1000000000', 'wei');

    console.log(oneGwei.eq(oneBillionWei)); // true
    ```
2. 使用ganache作为代理节点
    ```javascript
    const { providers } = require('ethers');

    const provider = new providers.Web3Provider(ganacheProvider);
    ```
3. 创建钱包实例，并发送交易
    ```javascript
    const { Wallet, utils } = require('ethers');

    const wallet = new Wallet(privateKey, providder);

    const tx = wallet.sendTransaction({
        to: addr,
        value: utils.parseUnits("1", "ether")
    });
    ```