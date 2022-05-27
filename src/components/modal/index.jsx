import React from "react";
import "./modal.css";

import nftImg from "../../assets/snft.webp";
import { IoLogoTwitter } from "react-icons/io";
import { MdVerifiedUser } from "react-icons/md";
import { SiDiscord } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { CgArrowBottomRightR } from "react-icons/cg";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const Index = ({ data, setState }) => {

  const approveNft = async (id) => {
    const userDoc = doc(db, "nftLists", id);
    const newFields = { approved: true };
    await updateDoc(userDoc, newFields)
  };

  return (
    <div className="modal-container">
      <div className="modal-box">
        <div className="flex-col md:w-full w-full flex px-4 py-3 d-card">
          <div className="w-full">
            <h3 className="mt-3 text-4xl font-bold">Blvck Paris</h3>
            <img
              className="w-full h-auto mt-5"
              src={data?.photo || nftImg}
              alt="nft assets"
            />
          </div>

          <div className="card-btn-box flex flex-col gap-x-5 mt-4">
            <div className="">
              <p className=" flex items-center">
                <MdVerifiedUser />{" "}
                <span className="text-base ml-2">Unverified</span>
              </p>

              <p className="mt-4 text-xl">May 02, 2022 – May 09, 2022</p>

              <div className="flex mt-6 gap-x-5">
                <div className="tag-box flex justify-center items-center gap-x-2">
                  <IoLogoTwitter />
                  <p>Twitter</p>
                </div>

                <div className="tag-box flex justify-center items-center gap-x-2">
                  <SiDiscord />
                  <p>Discord</p>
                </div>

                <div className="tag-box flex justify-center items-center gap-x-2">
                  <BsGlobe />
                  <p>Website</p>
                </div>

                <div className="tag-box flex justify-center items-center gap-x-2">
                  <CgArrowBottomRightR />
                  <p>Source</p>
                </div>
              </div>
            </div>

            <div className=" mt-7 flex items-center">
              <p className="font-bold">Blockchain :</p>
              <div className="tag-box2 flex justify-center items-center gap-x-2 ml-3">
                <p className="text-lg">Ethereum</p>
              </div>
            </div>

            <div className="text-d-box mt-9 w-full">
              <p className="leading-7">
                6666 Azuki went through a chemical explosion, living underground
                on the ETH blockchain. Azuki Demons are bigger, more brutal and
                stronger. Once you mint an Azuki Demon, you will get the Azuki
                Demon DAO membership and Airdrop $ZUKI token rewards. Meanwhile,
                you can get the ticket to receive 3D Azuki Demon and NFT
                Derivatives airdrop and play to earn $ZUKI in Zuki Ecosystem. In
                addition to the appreciation of NFT, Azuki Demon DAO will
                distribute a portion of the net revenue to all holders at a
                fixed time, such as quarterly. The amount will be calculated
                based on the proportion to their holdings.
              </p>
            </div>

            <div className="flex w-full flex-wrap justify-between mt-9">
              <button className="btn2" onClick={() => setState(false)}>
                Cancel
              </button>
              <button className="btn1" onClick={()=>approveNft(data?.id || null)}>Approve</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
