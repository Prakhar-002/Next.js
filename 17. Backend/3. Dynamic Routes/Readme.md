<h1  align="center" > 🏕️ 𝐃𝗒𐓣αꭑ𝗂𝖼 𝐑ⱺυ𝗍𝖾𝗌 🏚️ </h1>

</br>

![7](https://github.com/user-attachments/assets/16e0bde4-6dfa-4fea-8d8b-74876988a9c1)
![8](https://github.com/user-attachments/assets/9fc6e007-2bea-4efa-9980-f0ef1c77f903)

</br>

<h3 align="center" > 🐇 Movie / [ID] Route  🦚</h3>

```dash
http://localhost:3000/movies/id
```

```TSX
//============ 🗂️movies/🗂️[id]/⚛️router.ts ============== 

import { movies } from "../db";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const movie = movies.find((m) => m.id === +id);

  return movie
    ? new Response(JSON.stringify(movie))
    : new Response("Movie not found", { status: 404 });
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
