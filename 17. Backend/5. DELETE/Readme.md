<h1  align="center" > 🏕️ 𝐃𝐄𝐋𝐄𝐓𝐄 🏚️ </h1>

</br>

![11](https://github.com/user-attachments/assets/52f1bae4-1977-4ef3-95c4-4b6a5d77f8ee)

</br>

<h3 align="center" > 🐇 Movie / [ID] Delete Route  🦚</h3>

```dash
http://localhost:3000/movies/id
```

```TSX
//============ 🗂️movies/🗂️[id]/⚛️router.ts ============== 

import { movies } from "../db";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const movieId = +id;

  // Find the movie index
  const index = movies.findIndex((m) => m.id === movieId);

  if (index === -1) {
    return new Response(JSON.stringify({ error: "Movie not found" }), {
      status: 404,
    });
  }

  // Remove the movie from the collection
  movies.splice(index, 1);

  return new Response(
    JSON.stringify({ message: "Movie deleted successfully" }),
    { status: 200 }
  );
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
