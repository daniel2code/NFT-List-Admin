import React, { useState } from "react";
import "./home.css";

import Wrapper from "../../../components/wrapper/index";
import Modal from "../../../components/modal/index";
import { SiHiveBlockchain } from "react-icons/si";
import { FaLongArrowAltRight, FaCheckDouble, FaTwitter } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

import nftImg from "../../../assets/snft.webp";
// import { useGetRequest } from "../../../requests/api";

const Index = ({ data, reports }) => {
  // const { getRequest } =useGetRequest()

  // useEffect(()=>{
  //   // getRequest('/all-nftarts')
  // })
  const filterData = data?.filter((item) => item.approved === false)

  const [nftData, setNftData] = useState(null);

  return (
    <Wrapper>
      {nftData && <Modal data={nftData} setState={setNftData} />}
      <div className="home-box">
        <div className="flex w-full justify-between">
          <div className="p-4 home-card">
            <SiHiveBlockchain size={50} color="white" />
            <p className="mt-4 text-4xl font-bold text-white">NFT Listings</p>

            <div className="flex items-center gap-x-5">
              <p className="mt-4 font-bold text-white card-num">
                {data?.length}
              </p>
              <FaLongArrowAltRight size={20} color="white" className="mt-3" />
            </div>
          </div>

          <div className="p-4 home-card">
            <FaCheckDouble size={50} color="white" />

            <p className="mt-4 text-4xl font-bold text-white">
              Pending Approval
            </p>

            <div className="flex items-center gap-x-5">
              <p className="mt-4 font-bold text-white card-num">{filterData.length}</p>
              <FaLongArrowAltRight size={20} color="white" className="mt-3" />
            </div>
          </div>

          <div className="p-4 home-card">
            <IoIosSettings size={50} color="white" />
            <p className="mt-4 text-4xl font-bold text-white">Reports/Issues</p>

            <div className="flex items-center gap-x-5">
              <p className="mt-4 font-bold text-white card-num">
                {reports?.length}
              </p>
              <FaLongArrowAltRight size={20} color="white" className="mt-3" />
            </div>
          </div>
        </div>

        <div>
          <p className=" text-4xl font-bold mt-4 mb-7  mt-7">New NFT Listed</p>

          <div className="flex flex-col gap-y-5">
            {data?.map((item) => {
              console.log(item)
              return (
                <div
                  className="flex justify-between items-center nft-list-card"
                  onClick={() => setNftData(item)}
                >
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

                  <p className="text-lg">DG Labs is a NFT art...</p>
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
