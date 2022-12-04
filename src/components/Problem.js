import React, { useState, useEffect } from "react";
import Maze from "./Maze";
import Solution from "./Solution";

const probelemArray = [
  [1, 1, 1, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 1, 1, 1],
];

const Problem = () => {
  const findPaths = () => {
    let solArray = [];

    return solArray;
  };

  return (
    <div>
      <Maze problem={true} arr={probelemArray} />
      <Solution sol={["DDRDRR", "DRDDRR"]} />
    </div>
  );
};

export default Problem;
