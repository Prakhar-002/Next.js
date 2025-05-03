<h1  align="center" > 🏕️ 𝐂ᥣ𝗂𝖾𐓣𝗍 𝐂ⱺꭑρⱺ𐓣𝖾𐓣𝗍𝗌 🏚️ </h1>

</br>

![6](https://github.com/user-attachments/assets/44e2abc8-a2b7-4e4a-b685-8ae044a27928)

</br>

<h3 align="center" > 🐇 Movie Page 🦚</h3>

```dash
http://localhost:3000/movies
```

```TSX
//============ 🗂️movies/⚛️page.ts ============== 

// We need to write this for making a client components
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

```
