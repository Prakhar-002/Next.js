"use client";

import { useState } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  console.log("This message is coming from client component");

  return (
    <div>
      <h1>Checking out the Client Component</h1>
      <button onClick={() => console.log("just testing")}>Click</button>
    </div>
  );
};

export default Movies;
