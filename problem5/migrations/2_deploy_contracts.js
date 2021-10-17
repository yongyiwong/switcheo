const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");
const MyContract = artifacts.require("MyContract");
const OtherContract = artifacts.require("OtherContract");
const Counter = artifacts.require("Counter");
const Intraction = artifacts.require("Interaction");

module.exports = function (deployer) {
  deployer.deploy(ConvertLib);

  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);

  deployer.link(ConvertLib, MyContract);
  deployer.deploy(MyContract);

  deployer.deploy(OtherContract);
  deployer.deploy(Counter);
  deployer.deploy(Intraction);
};
