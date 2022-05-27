import React from "react";

import "./pending.css";
import Wrapper from "../../../components/wrapper/index";
import { FaTwitter } from "react-icons/fa";
import nftImg from "../../../assets/snft.webp";

import { textTruncate } from "../../../utils/textTruncate";

const Index = ({ data }) => {
  const filterData = data?.filter((item) => item.approved === false);

  return (
    <Wrapper>
      <div className="p-6">
        <div>
          <p className=" text-4xl font-bold mt-4 mb-7  mt-7">
            Unapproved NTF's
          </p>

          <div className="flex flex-col gap-y-5">
            {filterData?.map(() => {
              return (
                <div className="flex justify-between items-center nft-list-card">
                  <div className="flex items-center">
                    <img src={nftImg} alt="nft display" className="nft-img" />
                    <p className="text-lg ml-5">3D Intergalactic Pandas</p>
                  </div>

                  <div className="flex gap-x-3">
                    <FaTwitter />
                    <FaTwitter />
                  </div>

                  <p className="text-lg">May 05, 15:00</p>

                  <p className="text-lg">Mint</p>

                  <p className="text-lg">
                    {textTruncate("DG Labs is a NFT art", 23)}...
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Index;
