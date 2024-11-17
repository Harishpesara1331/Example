import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const ageRanges = [
    { range: "0 to 3 Years", description: "Toys for infants and toddlers", path: "0-3-years" },
    { range: "4 to 8 Years", description: "Toys for preschoolers and kids", path: "4-8-years" },
    { range: "9 to 12 Years", description: "Toys for older children", path: "9-12-years" },
  ];

  return (
    <div className="w-full h-full flex flex-row justify-center items-center gap-8 mt-10">
      {ageRanges.map((ageRange, index) => (
        <div
          key={index}
          className="h-[8rem] w-[23%] bg-white rounded-sm overflow-hidden relative group p-2 z-0 shadow-lg cursor-pointer"
          onClick={() => navigate(`/toys/${ageRange.path}`)}
        >
          <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-purple-500 group-hover:scale-[800%] duration-500 z-[-1] op" />
          <div className="flex h-full w-full justify-center items-center flex-col">
            <h1 className="z-20 font-bold group-hover:text-white duration-300 text-lg mb-2">
              {ageRange.range}
            </h1>
            <p className="z-20 text-center text-gray-600 group-hover:text-white duration-300 text-sm">
              {ageRange.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
