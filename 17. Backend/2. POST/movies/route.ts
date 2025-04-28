import { movies } from "./db";

export async function POST(req: Request) {
  let movie = await req.json();

  const newMovie = { ...movie };
  movies.push(newMovie);
  return new Response(JSON.stringify(newMovie));
}
