import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import { ethers } from 'hardhat';

const feeBase = 1000;
const feeMul = 3;
const entryPoint = '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy} = deployments;

  const {deployer} = await getNamedAccounts();

  await deploy('RWalletFactory', {
    from: deployer,
    args: [entryPoint],
    log: true,
  });

  // const RWalletFactory = await deployments.get('RWalletFactory');
  // const RWalletFactoryAddress = RWalletFactory.address;

  // await deploy('MarketPlace', {
  //   from: deployer,
  //   args: [
  //     RWalletFactoryAddress,
  //     feeBase,
  //     feeMul
  //   ],
  //   log: true
  // });

  // await deploy('NFT', {
  //   from: deployer,
  //   args: [],
  //   log: true,
  // });

  // const [owner, dummy] = await ethers.getSigners();
  // // console.log('\ndeployer = owner:', deployer === owner.address);
  // const nft = await deployments.get('NFT');
  // const nftContract = new ethers.Contract(
  //   nft.address,
  //   nft.abi,
  //   owner  
  // );
  // let tx = await nftContract.safeMint(dummy.address);
  // let receipt = await tx.wait();
  // const tokenId = receipt.events[0].args.tokenId;
  // console.log(
  //   `\ntoken ${tokenId} minted to ${dummy.address}\ntx: ${receipt.transactionHash}`
  // );

  // const ownerOf_0 = await nftContract.ownerOf(tokenId);
  // console.log('ownerOf test:', ownerOf_0 === dummy.address);
  // const bal = await nftContract.balanceOf(dummy.address);
  // console.log('balanceOf test:', bal.toString() === '1');

  // const mktPlace = await deployments.get('MarketPlace');
  // const mktPlaceContract = new ethers.Contract(
  //   mktPlace.address,
  //   mktPlace.abi,
  //   dummy
  // );
  // tx = await nftContract.connect(dummy).approve(mktPlace.address, tokenId);
  // await tx.wait;
  // console.log(`\ntoken ${tokenId} approved to mktPlace`);
  // tx = await mktPlaceContract.lendNFT(nft.address, tokenId, 1000, 150);
  // await tx.wait();
  // console.log(`\ntoken ${tokenId} listed: fee=1000; duration=150 `);

  // const assets = await mktPlaceContract.getAssets(dummy.address);
  // console.log('getAssets test:');
  // console.log(
  //   'lender:', assets[0].lender === dummy.address,
  //   'contract:', assets[0].contract_ === nft.address,
  //   'id:', assets[0].id.eq(tokenId),
  //   'fee:', assets[0].fee.toString() === '1000',
  //   'duration', assets[0].duration.toString() === '150'
  // );
  



};
module.exports.default = func;
func.tags = [];
