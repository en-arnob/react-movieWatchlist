import React from "react";
import { BsFillBackspaceFill, BsStar, BsStarFill } from "react-icons/bs";

const Movie = ({ movie, onDelete, changeToggle }) => {
  return (
    <div
      onDoubleClick={() => changeToggle(movie.id)}
      className="bg-warning rounded m-2"
    >
      <div className=" d-flex justify-content-between p-3">
        <h5>
          {movie.priority === true && <BsStarFill />}
          {movie.priority === false && <BsStar />}
          <span style={{ paddingLeft: "10px" }}> </span>
          {movie.name}
          <> </>
        </h5>
        <h5>
          <BsFillBackspaceFill onClick={() => onDelete(movie.id)} />
        </h5>
      </div>
    </div>
  );
};

export default Movie;
