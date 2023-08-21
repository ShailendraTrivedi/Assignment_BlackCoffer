import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.main.css";
import { fetchAction } from "../../redux/action.redux/fetchAction";
import fetchTypeAction from "../../redux/action.redux/fetchTypeAction";
import Table from "./Table";
import Doughnut from "../charts.components/Doughnut";
import Model from "./Model";

const Main = () => {
  const dispatch = useDispatch();
  /** This is used to fetch all data from store */
  const getAllDataFromStore = useSelector(
    (state) => state.getAllFetchDataFromStore
  );

  /** This is used to fetch all data with type from store */
  const getFetchDataByType = useSelector(
    (state) => state.getFetchDataByTypeFromStore
  );

  const [selectFilter, setSelectFilter] = useState("all");
  const [inputValue, setInputValue] = useState("");
  const [showFilteredOuptput, setShowFilteredOutput] = useState();
  const [chartFilter, setChartFilter] = useState("start_year");
  const [popUp, setPopUp] = useState(false);
  const [dataModel, setDataModel] = useState();
  useEffect(() => {
    dispatch(fetchAction());
  }, []);

  useEffect(() => {
    dispatch(fetchTypeAction({ selectFilter, inputValue }));
  }, [selectFilter, inputValue]);

  useEffect(() => {
    const filterOut = getAllDataFromStore.data.map((item) => item[chartFilter]);
    setShowFilteredOutput(filterOut);
  }, [getAllDataFromStore,chartFilter]);

  return (
    <>
      {popUp && <Model dataModel={dataModel} setPopUp={setPopUp} />}
      <div className="pl-10 p-5 container">
        <div className="main">
          <div className="flex justify-between px-2 p-2 text-sm">
            <div className="w-[45rem] h-[30rem]">
              <Doughnut filteredData={showFilteredOuptput} />
            </div>
            <div className=" grid grid-rows-4 w-[25rem]">
              <select
                value={chartFilter}
                onChange={(e) => setChartFilter(e.target.value)}
                id="filter"
                className="border-2 border-black w-[10rem] h-[2rem]"
              >
                <option value="start_year">Start Year</option>
                <option value="end_year">End Year</option>
                <option value="sector">Sector</option>
                <option value="topic">Topic</option>
                <option value="region">Region</option>
                <option value="added">Added</option>
                <option value="country">Country</option>
              </select>
              <div className="flex flex-col justify-around items-center row-span-2 bg-black text-white list-none rounded p-2">
                <div className="text-2xl">Shailendra Trivedi</div>
                <div className="text-xl text-violet-700">MERN Developer</div>
                <div className="text-lg">+91 9453292015</div>
                <div className="text-md">shailendratrivedi009@gmail.com</div>
                <a
                  href="https://drive.google.com/file/d/1zziokEoBZPr7YQRgKDQ_6DpgyCYtR1cR/view?usp=sharing"
                  className="bg-violet-700 p-2 hover:rounded-2xl transition-all duration-100"
                >
                  Preview Resume
                </a>
              </div>
            </div>
          </div>
          <div className="w-[70rem]">
            <div className="flex w-full justify-between px-2 p-2 text-sm">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter the Filter Value ..."
                className="focus:outline-none border-2 border-black px-2 w-2/3"
              />
              <select
                value={selectFilter}
                onChange={(e) => setSelectFilter(e.target.value)}
                id="filter"
                className="border-2 border-black w-[10rem]"
              >
                <option value="all">All</option>
                <option value="start_year">Start Year</option>
                <option value="end_year">End Year</option>
                <option value="sector">Sector</option>
                <option value="topic">Topic</option>
                <option value="region">Region</option>
                <option value="added">Added</option>
                <option value="country">Country</option>
              </select>
            </div>
            <Table
              setPopUp={setPopUp}
              showFilteredOuptput={getFetchDataByType}
              setDataModel={setDataModel}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
