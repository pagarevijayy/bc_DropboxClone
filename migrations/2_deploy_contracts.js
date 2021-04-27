/* eslint-disable no-undef */
const DStorage = artifacts.require("DStorage");

module.exports = function(deployer) {
  deployer.deploy(DStorage);
};
