// 导入ethers包
import { ethers } from 'ethers';
// playcode免费版不能安装ehters,用这条命令，需要从网络上import包(把上面这行注释掉)
// import { ethers } from "https://cdn-cors.ethers.io/lib/ethers-5.6.9.esm.min.js";

// 利用公共rpc节点连接以太坊网络
const ALCHEMY_MAINNER_URL = 'https://mainnet.infura.io/v3/c4b32260e7954619b67785cde8dfd510';
const ALCHEMY_SEPOLIA_URL = 'https://sepolia.infura.io/v3/c4b32260e7954619b67785cde8dfd510';

// 连接以太坊主网
const providerEth = new ethers.providers.JsonRpcProvider(ALCHEMY_MAINNER_URL);
// 连接Sepolia测试网
const providerSepolia = new ethers.providers.JsonRpcProvider(ALCHEMY_SEPOLIA_URL);

const main = async ()=> {
    // 利用provider读取链上信息
    // 1.查询vitalik在主网和Sepolia测试网的ETH余额
    console.log(`1.查询vitalik在主网和Sepolia测试网的ETH余额`);
    const balance = await providerEth.getBalance(`vitalik.eth`);
    const balanceSepolia = await providerSepolia.getBalance(`0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045`);
    // 将余额输出在console（主网）
    console.log(`ETH Balance of vitalik: ${ethers.formatEther(balance)} ETH`);
    // 输出Sepolia测试网ETH余额
    console.log(`Sepolia ETH Balance of vitalik: ${ethers.formatEther(balanceSepolia)} ETH`);

    // 2.查询provider连接到了哪条链
    console.log(`2.查询provider连接到了哪条链`);
    const network = await providerEth.getNetwork();
    console.log(network.toJson());

    // 3.查询区块高度
    console.log("3.查询区块高度");
    const blockNumer = await providerEth.getBlockNumber();
    console.log(blockNumer);

    // 4.查询 vitalik 钱包历史交易次数
    console.log("4.查询 vitalik 钱包历史交易次数");
    const txCount = await providerEth.getTransactionCount("vitalik.eth");
    console.log(txCount);

    // 5.查看当前建议的gas设置
    console.log("5.查看当前建议的gas设置");
    const feeData = await providerEth.getFeeData();
    console.log(feeData);

    // 6.查询区块信息
    console.log("6.查询区块信息");
    const block = await providerEth.getBlock(0);
    console.log(block);

    // 7.给定合约地址查询合约bytecode，例子用的WETH地址
    console.log("7.给定合约地址查询合约bytecode，例子用的WETH地址");
    const code = await providerEth.getCode("0xc778417e063141139fce010982780140aa0cd5ab");
    console.log(code);

}

main();