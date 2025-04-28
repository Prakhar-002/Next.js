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
