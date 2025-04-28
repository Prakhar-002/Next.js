<h1  align="center" > 🏕️ 𝐆𝐄𝐓 🏚️ </h1>

</br>

![3](https://github.com/user-attachments/assets/6c3476e0-87f1-4881-b625-249a034cbb4b)
![4](https://github.com/user-attachments/assets/8b71d3b1-0488-47cd-a7dc-dd4c9b41e33e)

</br>

<h3 align="center" > 🐇 Movie Get Route  🦚</h3>

```dash
http://localhost:3000/movies
```

```TSX
//============ 🗂️movies/⚛️router.ts ============== 

// export async function GET() {
//   return new Response("Hello World");
// }

import { movies } from "./db";

export async function GET() {
  return Response.json(movies);
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
