// export async function GET() {
//   return new Response("Hello World");
// }

import { movies } from "./db";

export async function GET() {
  return Response.json(movies);
}
