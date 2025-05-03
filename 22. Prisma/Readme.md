<h1  align="center" > 🏕️ 𝐏𝗋𝗂𝗌ꭑα 🏚️ </h1>

</br>

![16](https://github.com/user-attachments/assets/480e6ed8-8958-491f-ab16-578e6d10c24f)
![17](https://github.com/user-attachments/assets/97a92f04-043f-45b0-a84b-0a3912c1efba)
![18](https://github.com/user-attachments/assets/9a5a9dae-16a8-4cde-9d4b-d643130830f8)
![19](https://github.com/user-attachments/assets/d289dcc3-1e0b-41fa-ac8d-d682c17e52e7)
![20](https://github.com/user-attachments/assets/8f837423-85a5-4ca5-8d78-e0185a423c01)

</br>

<h1  align="center" > 🏕️ 𝐏𝗋𝗂𝗌ꭑα 𝚰𐓣𝗌𝗍αᥣᥣα𝗍𝗂ⱺ𐓣 𝐆υ𝗂ᑯ𝖾 🏚️ </h1>

</br>

![21](https://github.com/user-attachments/assets/b97a4627-0567-489a-8572-538b824d3fb7)
![22](https://github.com/user-attachments/assets/8c41c042-1132-4e20-85d1-73bd33060b7d)
![23](https://github.com/user-attachments/assets/02d9eb93-d62e-4f4b-af29-95b1d2dd7441)
![24](https://github.com/user-attachments/assets/cbefbe99-a042-4c0f-bdf7-1241f941d884)

</br>

<h3 align="center" > 🐇 Prisma Folder 🦚</h3>

```TSX
//============ 🗂️prisma/🛢️schema.prisma ============== 

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Movie {
  id          Int      @id @default(autoincrement())
  title       String
  description String
  genre       String
  releaseDate DateTime
  rating      Float?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

```

</br>

<h3 align="center" > 🐇 Index.ts 🦚</h3>

```TS
//============ 🗂️app/🈳index.ts ============== 

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createMovie() {
  const newMovie = await prisma.movie.create({
    data: {
      title: "Inception",
      description:
        "A cinematic masterpiece that seamlessly blends reality and dreams, Inception is a captivating story of a dream within a dream.",
      genre: "Sci-Fi",
      releaseDate: new Date("2010-07-16"),
      rating: 8.8,
    },
  });
}

async function createMultipleMovies() {
  const movies = await prisma.movie.createMany({
    data: [
      {
        title: "The Dark Knight",
        description: "A superhero movie that follows the story of Batman.",
        genre: "Action",
        rating: 8.8,
        releaseDate: new Date("2008-07-18"),
      },
      {
        title: "Interstellar",
        description:
          "A science fiction movie that explores the possibilities of interstellar travel.",
        rating: 8.6,
        genre: "Sci-Fi",
        releaseDate: new Date("2014-11-07"),
      },
      {
        title: "Alien Covenant",
        description:
          "A science fiction movie that explores the possibilities of interstellar travel.",
        rating: 8.6,
        genre: "Sci-Fi",
        releaseDate: new Date("2014-11-07"),
      },
    ],
  });
}

async function getAllMovies() {
  const movies = await prisma.movie.findMany();
  console.log("All Movies: ", movies);
}

async function getMovieById(movieId: number) {
  const movie = await prisma.movie.findUnique({
    where: { id: movieId },
  });

  console.log(movie);
}

async function updateMovie(
  movieId: number,
  updatedTitle: string,
  updatedDescription: string
) {
  const updatedMovie = await prisma.movie.update({
    where: { id: movieId },
    data: {
      title: updatedTitle,
      description: updatedDescription,
    },
  });

  console.log("Updated Movie: ", updatedMovie);
}

async function deleteMovie(movieId: number) {
  const deletedMovie = await prisma.movie.delete({
    where: { id: movieId },
  });

  console.log("Deleted Movie: ", deletedMovie);
}

async function main() {
  // await createMovie();
  // await createMultipleMovies();
  // await getAllMovies();
  // await getMovieById(1);
  // await updateMovie(1, "Updated Title", "Updated Description");
  // await deleteMovie(1);
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });

```
