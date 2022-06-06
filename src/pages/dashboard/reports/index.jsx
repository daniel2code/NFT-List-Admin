import React, { useState } from "react";
import "./reports.css";
import Wrapper from "../../../components/wrapper/index";
import { textTruncate } from "../../../utils/textTruncate";
import Modal from "./modals/index";

const Index = ({ reports }) => {
  const [reportData, setReportData] = useState(false);

  const updateState = (data) => {
    setReportData(data);
  };

  return (
    <Wrapper>
      {reportData && <Modal setReportData={setReportData} data={reportData} />}
      <div className="w-full p-6 relative">
        <h2 className="text-3xl font-bold">Reports and Issues</h2>

        <div className="mt-8 flex gap-y-6 flex-wrap justify-between">
          {reports?.map((item) => {
            console.log(item);
            return (
              <div className="report-card" onClick={() => updateState(item)}>
                <div className="flex">
                  <p className="font-bold">Name: </p>
                  <span className="ml-3">{item?.name}</span>
                </div>

                <div className="flex mt-2">
                  <p className="font-bold">Email: </p>
                  <span className="ml-3">{item?.email}</span>
                </div>

                <div className="flex mt-2">
                  <p className="font-bold">
                    Message:{" "}
                    <span className="ml-3 font-normal msg-text">
                      {textTruncate(item?.message, 70)}
                      ...
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Index;
