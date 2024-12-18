// 1、导入已经安装好的 ethers 库
//      如果在 playcode 平台上，免费账号不能安装外部库。我们可以直接从 ethers 的CDN导入(出于安全考虑，尽量不要引入CDN)
import { ethers } from 'ethers';

// 2、连接以太坊 
//      在 ethers 中，Provider 类是一个以以太坊网络连接提供抽象的类，它提供对区块链及其状态的只读访问。
//      我们声明一个 provider 用于连接以太坊网络。ehters 内置了一些公用rpc，方便用户连接以太坊。
const provider = ethers.getDefaultProvider();

// 3、声明 async 函数
//      由于和区块链交互不是实时的我们需要用到 js 的 async/await 语法糖。每次和链交互的调用需要用到 await
//      再把这些用 async 函数包括起来，最后再调用这个函数。
const main = async() => {
    // 4、获取v神地址的 ETH 余额
    //      我们可以利用 Provider 类的getBalance()函数来查询菜个地址的 ETH余额。
    //      由于ethers 原生支持 ENS 域名，我们不需要知道具体地址
    //      用 ENS 域名 vitalik.eth就可以查询到以太坊创始人豚林-vitalik的余额。
    const balance = await provider.getBalance(`vitalik.eth`)

    // 5、转换单位后在 console 中输出
    //      我们从链上获取的以太坊余额以we1为单位，而1ETH=10^18 we1。我们打印在 console之前，需要进行单位转换。
    //      ethers 提供了功能函数 formatEther，我们可以利用它将wei转换为 ETH。
    console.log(`Eth Balance of vitalik : ${ethers.utils.formatEther(balance)} ETH`);
}

main();