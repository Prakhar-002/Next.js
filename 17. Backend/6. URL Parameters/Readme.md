<h1  align="center" > 🏕️ 𝐔𝐑𝐋 𝐏α𝗋αꭑ𝖾𝗍𝖾𝗋𝗌 🏚️ </h1>

</br>

![12](https://github.com/user-attachments/assets/b16597ed-86f4-429f-9e4b-26249f3ae308)
![13](https://github.com/user-attachments/assets/d730a99d-3913-481d-8b90-70e7ef281ce3)

</br>

<h3 align="center" > 🐇 Movies Delete Route  🦚</h3>

```dash
http://localhost:3000/movies?query=john
```

```TSX
//============ 🗂️movies/⚛️router.ts ============== 

import { NextRequest } from "next/server";
import { movies } from "./db";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  const filteredMovies = query
    ? movies.filter((m) => m.name.toLowerCase().includes(query))
    : movies;

  return new Response(JSON.stringify(filteredMovies));
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
