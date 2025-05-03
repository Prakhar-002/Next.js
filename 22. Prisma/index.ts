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
