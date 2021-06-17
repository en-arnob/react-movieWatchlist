import React from "react";
import { useState } from "react";

const AddMovie = ({ onAdd }) => {
  const [movieName, setMovieName] = useState("");
  // const [moviePriority, setMoviePriority] = useState(false);
  const onSubmit = e => {
    e.preventDefault();

    if (!movieName) {
      alert("Write down a movie name");
      return;
    }
    onAdd({ movieName });
    setMovieName("");
    // setMoviePriority(false);
  };
  return (
    <div className="bg-light m-2 rounded p-5">
      <form className="p-2" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter movie name"
            value={movieName}
            onChange={event => setMovieName(event.target.value)}
          ></input>
        </div>

        <input
          type="submit"
          className=" mt-2 btn btn-block btn-dark"
          value="Add Movie"
        />
      </form>
    </div>
  );
};

export default AddMovie;
