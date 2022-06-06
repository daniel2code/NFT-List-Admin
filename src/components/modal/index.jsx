import React, { useState } from "react";
import "./modal.css";

import nftImg from "../../assets/snft.webp";
import { IoLogoTwitter } from "react-icons/io";
import { MdVerifiedUser } from "react-icons/md";
import { SiDiscord } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { CgArrowBottomRightR } from "react-icons/cg";
import { updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from "react-toastify";

const Index = ({ data, setState }) => {
  const [loading, setLoading] = useState(false);

  const approveNft = async (id) => {
    setLoading(true);
    const userDoc = doc(db, "nftLists", id);
    const newFields = { approved: true };
    await updateDoc(userDoc, newFields);
    setLoading(false);
    setState(false);
    notify("NFT approved and verified");
  };

  const deleteNft = async (id) => {
    setLoading(true);
    await deleteDoc(doc(db, "nftLists", id));
    window.location.reload(false);
  };

  const notify = (msg) => toast(msg);

  return (
    <>
      <div className="modal-container">
        {loading && (
          <div className="modal-loader">
            <ClipLoader color="white" loading={loading} size={150} />
          </div>
        )}
        <div className="modal-box">
          <div className="flex-col md:w-full w-full flex px-4 py-3 d-card">
            <div className="w-full">
              <h3 className="mt-3 text-4xl font-bold">{data?.title || ""}</h3>
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
                  <span className="text-base ml-2">
                    {!data?.approved ? "Unverified" : "Verified"}
                  </span>
                </p>

                <p className="mt-4 text-xl">{data?.start_date || ""}</p>

                <div className="flex mt-6 gap-x-5">
                  <a
                    href={data?.twitter || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="tag-box flex justify-center items-center gap-x-2"
                  >
                    <IoLogoTwitter />
                    <p>Twitter</p>
                  </a>

                  <a
                    href={data?.discord || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="tag-box flex justify-center items-center gap-x-2"
                  >
                    <SiDiscord />
                    <p>Discord</p>
                  </a>

                  <a
                    href={data?.website || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="tag-box flex justify-center items-center gap-x-2"
                  >
                    <BsGlobe />
                    <p>Website</p>
                  </a>

                  <div className="tag-box flex justify-center items-center gap-x-2">
                    <CgArrowBottomRightR />
                    <p>Source</p>
                  </div>
                </div>
              </div>

              <div className=" mt-7 flex items-center">
                <p className="font-bold">Blockchain :</p>
                <div className="tag-box2 flex justify-center items-center gap-x-2 ml-3">
                  <p className="text-lg">Near</p>
                </div>
              </div>

              <div className="text-d-box mt-9 w-full">
                <p className="leading-7">
                  {data?.description || "No description yet"}
                </p>
              </div>

              <div className="flex w-full flex-wrap justify-between mt-9">
                <button
                  className="btn2"
                  onClick={() => deleteNft(data?.id || null)}
                >
                  Delete
                </button>
                <button
                  className="btn1"
                  onClick={() => approveNft(data?.id || null)}
                >
                  Approve
                </button>
              </div>

              <button className="btn3" onClick={() => setState(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Index;
