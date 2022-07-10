import React from "react";

export default function SearchEngine(props) {
  function searchEngine(event) {
    event.preventDefault();
    alert("It is 20 degree");
  }
  let form = (
    <form onSubmit={searchEngine}>
      <input type="search" placeholder="Type a city..." onChange={props.city} />
      <input type="submit" value="search" />
    </form>
  );

  return (
    <div className="search">
      {form}
      <p>Temperature : 20ºC</p>
    </div>
  );
}
