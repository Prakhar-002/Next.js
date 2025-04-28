<h1  align="center" > 🏕️ 𝐏𝐎𝐒𝐓 🏚️ </h1>

</br>

![5](https://github.com/user-attachments/assets/b134493f-e7b8-41de-b813-301d99a5d67c)
![6](https://github.com/user-attachments/assets/388e69d3-87b6-45f5-a0a2-17f242bc7d16)

</br>

<h3 align="center" > 🐇 Movie Post Route  🦚</h3>

```dash
http://localhost:3000/movies
```

```TSX
//============ 🗂️movies/⚛️router.ts ============== 

import { movies } from "./db";

export async function POST(req: Request) {
  let movie = await req.json();

  const newMovie = { ...movie };
  movies.push(newMovie);
  return new Response(JSON.stringify(newMovie));
}

```

</br>

<h3 align="center" > 🐇 Database  🦚</h3>

```TSX
//============ 🗂️movies/⚛️db.ts ============== 

export const movies = [
  {
    id: 1,
    name: "John Wick",
    ratings: 1,
    genre: "Action",
  },

  {
    id: 2,
    name: "The Shawshank Redemption",
    ratings: 2,
    genre: "Drama",
  },

  {
    id: 3,
    name: "The Godfather",
    ratings: 3,
    genre: "Drama",
  },

  {
    id: 4,
    name: "The Dark Knight",
    ratings: 4,
    genre: "Action",
  },

  {
    id: 5,
    name: "Inception",
    ratings: 5,
    genre: "Action",
  },
];

```
