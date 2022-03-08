// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import "remix_tests.sol"; // this import is automatically injected by Remix.
import "remix_accounts.sol";
import "../contracts/MikeGao.sol";

contract MikeGaoTest is VINYL{
   
    bytes32[] proposalNames;
    address addr = 0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db;
    function beforeAll () public {
        toggleActive();
        setMerkleRoot(0x9317230cf52f1006a1f8f6c9cd6c6d575dce27bd81253402c607385f7df767a1);
    }
    function checkURITest () public {
        setURI("https://ratdao.mypinata.cloud/ipfs/QmWG9nWHupDhh5oeGbiaDqAKRgLm9h6KbpzxkPKNWWKzd3/");
        Assert.equal(uri(1), string("https://ratdao.mypinata.cloud/ipfs/QmWG9nWHupDhh5oeGbiaDqAKRgLm9h6KbpzxkPKNWWKzd3/1.json"), "uri does not match");
    }
    function checkMintTest () public {
        //address test_address = 0x7De43dFe90d5F11c8b7F4e8AaA1c827DD109f43d;
        bytes32[] memory proofs = new bytes32[](6);
        proofs[0] = 0x0b56f7b46b9a97d1d85e8d4d7faa6359c92513afe2b9ce0b55bf234d87e97ae1;
        proofs[1] = 0x9e75b336af81f12124ef5fbc5a5478ebd233f241a9ceb4af8f1adb2ff245acd1;
        proofs[2] = 0xec727cd0ef3faad3a58606a8c063008e3bfa68a4464ce4e6b2cfb15d100c2373;
        proofs[3] = 0x9017d08bb8e29d37bfe04960093a25c7342c0b191018cd2d166e532064e43058;
        proofs[4] = 0xff0af738b55dd9b379fa9a10ad8c4a20710b8a40e14828e0baf1cd9f578a083d;
        proofs[5] = 0xabf5b27d3b2ab9e59823a825587af7e02caf2d9610ff17be3c8085b86344d3df;
        mintNFT(2443, 4, proofs);
        Assert.equal(balanceOf(msg.sender, MINT_VINYL), uint256(4), "Mint VINYL Failed");
        Assert.equal(balanceOf(msg.sender, GOLD_VINYL), uint256(2), "GOLD VINYL Failed");
    }
    function checkDoubleMintTest () public {
        Assert.notEqual(checkDoubleMint(2443), bool(true), "you cannot mint anymore");
    }
    function checkTransferTest () public {
        bytes memory a = "";
        safeTransferFrom(msg.sender, addr, MINT_VINYL, 1, a);
        Assert.equal(balanceOf(msg.sender, MINT_VINYL), uint256(3), "Transfer Fails: from sender");
        Assert.equal(balanceOf(addr, MINT_VINYL), uint256(1), "Transfer Fails: from receiver");
    }
    function checkBurnTest () public {
        burn(GOLD_VINYL, 1);
        Assert.equal(balanceOf(msg.sender, GOLD_VINYL), uint256(1), "Burn Fails: Add0");
        _burn(addr, MINT_VINYL, 1);
        Assert.equal(balanceOf(addr, MINT_VINYL), uint256(0), "Burn Fails: Add1");
    }
}