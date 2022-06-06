import React, { useState, useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import Home from "./home/index";
import Reports from "./reports/index";
import Pending from "./pending/index";

const Index = () => {
  const [data, setData] = useState([]);
  const [reports, setReports] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "nftLists"));
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
        });

        setData(list);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchReports = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "reports"));
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
        });

        setReports(list);
      } catch (err) {
        console.log(err);
      }
    };

    async function resolveRequests() {
      await Promise.all([fetchData(), fetchReports()]);
    }

    resolveRequests();
  }, []);

  return (
    // <Wrapper>
    <Routes>
      <Route path="/" element={<Home data={data} reports={reports} />} />
      <Route path="/reports" element={<Reports reports={reports} />} />
      <Route path="/pending" element={<Pending data={data} />} />
    </Routes>
    // </Wrapper>
  );
};

export default Index;
