import React from "react";
import { useParams } from "react-router-dom";

const toysData = {
  "0-3": [
    { name: "Soft Toy", price: "$10", img: "path/to/soft-toy.jpg" },
    { name: "Rattle", price: "$5", img: "path/to/rattle.jpg" },
  ],
  "4-8": [
    { name: "Building Blocks", price: "$20", img: "path/to/blocks.jpg" },
    { name: "Puzzle", price: "$15", img: "path/to/puzzle.jpg" },
  ],
  "9-12": [
    { name: "RC Car", price: "$30", img: "path/to/rc-car.jpg" },
    { name: "Board Game", price: "$25", img: "path/to/board-game.jpg" },
  ],
};

const ToysPage = () => {
  const { ageRange } = useParams();
  const toys = toysData[ageRange] || [];

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Toys for {ageRange.replace("-", " to ")} Years</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {toys.map((toy, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-md flex flex-col items-center"
          >
            <img src={toy.img} alt={toy.name} className="w-32 h-32 object-cover mb-3" />
            <h2 className="font-bold text-lg">{toy.name}</h2>
            <p className="text-gray-500">{toy.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToysPage;
