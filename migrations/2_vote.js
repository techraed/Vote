const TestToken = artifacts.require("./TestToken.sol");
const Vote = artifacts.require("./Vote.sol");
module.exports = function (deployer) {
    deployer.deploy(TestToken, "TestToken", "TT", 18).then(function () {
        return deployer.deploy(Vote, 30, TestToken.address, ["0x436f6361436f6c61", "0x46616e7461"]); 
    });
};