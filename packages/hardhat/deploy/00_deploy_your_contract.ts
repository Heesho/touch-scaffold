import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const touchTokenDeployment = await deploy("TouchToken", {
    from: deployer,
    // Contract constructor arguments
    args: [],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // Deploy TouchBadge contract
  const touchBadgeDeployment = await deploy("TouchBadge", {
    from: deployer,
    args: [touchTokenDeployment.address], // Pass the TouchToken address to the TouchBadge constructor
    log: true,
    autoMine: true,
  });

  // Get contract instances
  const touchToken = await hre.ethers.getContractAt("TouchToken", touchTokenDeployment.address);
  const touchBadge = await hre.ethers.getContractAt("TouchBadge", touchBadgeDeployment.address);

  console.log("TouchToken address:", await touchToken.getAddress());
  console.log("TouchBadge address:", await touchBadge.getAddress());

  // Set the TouchBadge contract as a minter for TouchToken
  await touchToken.setMinter(touchBadge.getAddress(), true);
  console.log("TouchBadge set as minter for TouchToken");
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployYourContract.tags = ["TouchToken", "TouchBadge"];
