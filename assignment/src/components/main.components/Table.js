import React, { useState } from "react";

const Table = ({ setPopUp, showFilteredOuptput, setDataModel }) => {
  const handlePopUp = (item) => {
    setPopUp(true);
    setDataModel(item);
  };

  return (
    <>
      <div className="tablehead rounded-t-2xl">
        <li>Start Year</li>
        <li>End Year</li>
        <li>Sector</li>
        <li>Topic</li>
        <li>Region</li>
        <li>Added</li>
        <li>Country</li>
        <li></li>
      </div>
      <div className="border-2 border-black text-sm">
        {showFilteredOuptput &&
          showFilteredOuptput.data.map((item, i) => (
            <div key={i} className="tablebody">
              <li>{item.start_year}</li>
              <li>{item.end_year}</li>
              <li>{item.sector}</li>
              <li>{item.topic}</li>
              <li>{item.region}</li>
              <li>{item.added}</li>
              <li>{item.country}</li>
              <button
                onClick={() => handlePopUp(item)} // Use a lambda function here
                className="morebutton"
              >
                More..
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Table;
