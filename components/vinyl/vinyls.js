import dynamic from "next/dynamic";
import Image from "next/image";
import { useState, useContext, useEffect } from "react";

import {
  SidebarTrackerContext,
  ScrollContext,
  ContractContext,
} from "../../layout/page";
import { useWeb3React } from "@web3-react/core";
import { injected, LATEST_PRICES, showError } from "../../common/constants";
import vinylWhitelist from "../../artifacts/contracts/whitelist.json";

// const Button = dynamic(() => import("../shared/button"));

const VinylSale = true;
const Vinyls = ({ drop }) => {
  const { minter, baseToken, web3, notify, vinylMinter } = useContext(ContractContext);
  const { library, account, activate } = useWeb3React();

  const buf2hex = x => '0x'+x.toString('hex')

  const onMintClick = async (e) => {
    e.preventDefault();

    const { MerkleTree } = require('merkletreejs')
    const keccak256 = require('keccak256');
    const { soliditySha3 } = require("web3-utils");
    const { BN } = require("bn.js");

    const wlUsers = vinylWhitelist;

    var is_whitelist = false;
    var mint_type = "";
    var my_index = 0;
    for (var wallet in wlUsers) {
      if (account == wallet) {
        mint_type = wlUsers[wallet];
        is_whitelist = true;
        break;
      }
      my_index++;
    }

    if (!is_whitelist) {
      showError("Your are not in whitelist"); return;
    }

    const leaves = [];
    var index = 0;
    for (var key in wlUsers) {
      leaves.push(soliditySha3( {t: 'address', v: key}, {t: 'uint256', v: wlUsers[key]}, {t: 'uint256', v: index} ));
      index++;
    }

    const tree = new MerkleTree(leaves, keccak256, {sortPairs: true});
    const root_ = tree.getRoot().toString('hex');
    const root = tree.getRoot();
    const hexroot = buf2hex(root);

    console.log("root-- ", hexroot, root_);

    const leaf = soliditySha3({t: 'address', v: account}, {t: 'uint256', v: mint_type}, {t: 'uint256', v: my_index});
    let proof = tree.getProof(leaf);
    let hexProof = tree.getHexProof(leaf);

    console.log("this is a proof--", tree.verify(proof, leaf, root), my_index);
    console.log("minter--", minter);
    console.log("vinylMinter--", vinylMinter);


    if (hexProof.length == 0) {
      showError("Please check your wallet!");
      return;
    }

    console.log("hexProof--", hexProof);

    try {
      var tx = {
        from: account,
        to: vinylMinter._address,
        data: vinylMinter.methods.mintNFT(my_index, mint_type, hexProof).encodeABI(),
        value: 0,
      };

      await library.eth
        .sendTransaction(tx)
        .on("mintNFT", function (hash) {
          notify.hash(hash);
        });
    } catch (ex) {
      showError(ex.message);
    }
  };

  return (
    <div className={drop.border}>
      <div className="p-2 bg-white image">
        <Image src={drop.img} alt={drop.title} width="600" height="600" />
      </div>
      <div className="p-2 bg-white text-black sm:min-h-[180px] md:min-h-[280px]">
      <div className="sm:min-h-[150px] md:min-h-[210px] pb-2">
        <h4 className={`text-[22px] font-bold mb-2 ${drop.date ? `md:flex` : ``}`}>
          <span>{drop.title}</span>
        </h4>
        <p className="text-sm">{drop.text}</p>
      </div>
        <div className="grid grid-cols-1 sm:mb-2 md:mb-0">
          <div className="w-full md:min-h-[50px]">
            <p className="font-mono uppercase pb-2 text-sm">{drop.size}</p>
          </div>
        </div>
        { !VinylSale ?
          <div className="opacity-50 text-center py-3 hidden sm:block cursor md:hidden lg:block">
            {drop.release}
              {/* <Button
                className="cursor"
                // type="secondary"
                text={drop.link.text}
                width="full"
                pointer="false"
                link={drop.link.path}
                textSize="lg:text-[14px]"
              /> */}
            </div>
            : 
            <input
              type="button"
              onClick={async (e) => {
                if (!account) {
                  try {
                    await activate(injected);
                  } catch (err) {}
                } else {
                  onMintClick(e);
                }
              }}
              value={`${`Mint`}`}
              className="bg-black text-black bg-brightGreen border-brightGreen hover:bg-brightBlue hover:cursor-pointer w-full px-4 py-2 font-bold"
            />
        }
        <div className="opacity-50 text-center py-3 sm:hidden md:block cursor lg:hidden">
        {drop.release}
           {/* <Button
            className="cursor"
            disabled={true}
            // type="secondary"
            text={drop.link.text}
            width="full"
            pointer="false"
            textSize="lg:text-[14px]"
            link={drop.link.path}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Vinyls;
