import React from "react";
import "./modal.css";

const Index = ({ data, setReportData }) => {
  console.log(data)
  return (
    <div className="report-modal-container">
      <div className="report-modal-box">
        <div className="modal-card">
          <div className="flex">
            <p className="font-bold">Name: </p>
            <span className="ml-3">{data?.name}</span>
          </div>

          <div className="flex mt-2">
            <p className="font-bold">Email: </p>
            <span className="ml-3">{data?.email}</span>
          </div>

          <div className="flex mt-2">
            <p className="font-bold">
              Message:{" "}
              <span className="ml-3 font-normal msg-text">{data?.message}</span>
            </p>
          </div>
          <button
            onClick={() => setReportData(false)}
            className="mt-5 report-modal-btn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
