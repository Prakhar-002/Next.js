<h1  align="center" > 🏕️ 𝐏𝐀𝐓𝐂𝐇 🏚️ </h1>

</br>

![9](https://github.com/user-attachments/assets/8d7c4129-434a-45ac-8c8a-77dadea74d45)
![10](https://github.com/user-attachments/assets/3285f35e-81c6-44e5-9778-19fc9ddc751c)

</br>

<h3 align="center" > 🐇 Movie / [ID] Patch Route  🦚</h3>

```dash
http://localhost:3000/movies/id
```

```TSX
//============ 🗂️movies/🗂️[id]/⚛️router.ts ============== 

import { movies } from "../db";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const movieId = +id;

  // Check if movie exists
  const movie = movies.find((m) => m.id === movieId);

  if (!movie) {
    return new Response(JSON.stringify({ error: "Movie not found" }), {
      status: 404,
    });
  }

  try {
    const updatedMovie = await req.json();

    // Find the index of the movie
    const index = movies.findIndex((m) => m.id === movieId);

    if (index === -1) {
      return new Response(JSON.stringify({ error: "Movie not found" }), {
        status: 404,
      });
    }

    // Update the movie
    movies[index] = { ...movie, ...updatedMovie };

    return new Response(JSON.stringify(movies[index]), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to parse JSON" }), {
      status: 400,
    });
  }
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
