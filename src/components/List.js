import React from "react";
import Movie from "./Movie";

const List = props => {
  return (
    <div className="bg-light m-2 rounded p-2">
      {props.movies.map(movie => (
        <Movie
          onDelete={props.onDelete}
          changeToggle={props.changeToggle}
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
  );
};

export default List;
