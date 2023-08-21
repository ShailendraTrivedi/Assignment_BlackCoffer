import React from "react";

const Model = ({ dataModel, setPopUp }) => {
  return (
    <>
      <div className="relative z-50">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-80 transition-opacity">
          <div className="flex justify-center items-center w-full h-full">
            <div className="relative flex flex-col justify-between w-[50%] bg-white p-5 text-sm rounded">
              <div>
                <span className="font-bold">Title:</span>
                {dataModel.title}
              </div>
              <div>
                <span className="font-bold">Start Year:</span>{" "}
                {dataModel.start_year}
              </div>
              <div>
                <span className="font-bold">End Year:</span>{" "}
                {dataModel.end_year}
              </div>
              <div>
                <span className="font-bold">Sector:</span> {dataModel.sector}
              </div>
              <div>
                <span className="font-bold">Topic:</span> {dataModel.topic}
              </div>
              <div>
                <span className="font-bold">Region:</span> {dataModel.region}
              </div>
              <div>
                <span className="font-bold">Added:</span> {dataModel.added}
              </div>
              <div>
                <span className="font-bold">Country:</span> {dataModel.country}
              </div>
              <div>
                <span className="font-bold">Intensity:</span>{" "}
                {dataModel.intensity}
              </div>
              <div>
                <span className="font-bold">Insight:</span> {dataModel.insight}
              </div>
              <div>
                <span className="font-bold">Likelihood:</span>{" "}
                {dataModel.likelihood}
              </div>
              <div>
                <span className="font-bold">Pestle:</span> {dataModel.pestle}
              </div>
              <div>
                <span className="font-bold">Published:</span>{" "}
                {dataModel.published}
              </div>
              <div>
                <span className="font-bold">Relevance:</span>{" "}
                {dataModel.relevance}
              </div>
              <div>
                <span className="font-bold">Source:</span> {dataModel.source}
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => setPopUp(false)}
                  className="bg-red-700 p-2 w-[10rem] text-white hover:rounded-3xl transition-all duration-100 hover:text-lg hover:p-1"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
