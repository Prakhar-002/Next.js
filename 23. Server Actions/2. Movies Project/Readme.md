<h1  align="center" > 🏕️ 𝐌ⱺ𝗏𝗂𝖾𝗌 𝐏𝗋ⱺ𝗃𝖾𝖼𝗍 🏚️ </h1>

</br>

![Prisma Movie](https://github.com/user-attachments/assets/904886d2-18fd-4590-9de0-a85fe84639dd)

</br>

<h3 align="center" > 🐇 Install Dependency 🦚</h3>

```dash
npx create-next-app@latest
npm i prisma -D
npx prisma init --datasource-provider sqlite
npx prisma migrate dev --name init
npx shadcn@latest init
npx shadcn@latest add button card dialog input label
```

</br>

<h3 align="center" > 🐇 Run Both in Different Terminals 🦚</h3>

```dash
npm run dev
```

</br>

```dash
npx prisma studio 
```

</br>

<h3 align="center" > 🐇 Home Page 🦚</h3>

```dash
http://localhost:3000
```

```TSX
//============ 🗂️app/⚛️page.tsx ==============

import Link from "next/link";

const Home = () => {
  return (
    <div
      className="flex min-h-screen flex-col items-center
     justify-center w-10/12 mx-auto p-10  text-gray-700"
    >
      <h1 className="text-6xl font-extrabold text-center drop-shadow-lg">
        🎬 Movie App
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        Add and manage your favorite movies with ease
      </p>

      <div className="mt-8 flex space-x-4">
        <Link href="/add-movie">
          <button
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700
           transition duration-300 ease-in-out text-white rounded-lg
            shadow-md transform hover:scale-105"
          >
            Add a Movie
          </button>
        </Link>
        <Link href="/all-movies">
          <button
            className="px-6 py-3 bg-gray-600 hover:bg-gray-700 
          transition duration-300 ease-in-out text-white rounded-lg
           shadow-md transform hover:scale-105"
          >
            View All Movies
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

```

</br>

<h3 align="center" > 🐇 Add-Movie Page 🦚</h3>

```dash
http://localhost:3000/add-movie
```

```TSX
//============ 🗂️app/🗂️add-movie/⚛️page.tsx ==============

import * as actions from "@/actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const AddMovie = () => {
  return (
    <div className="w-10/12 mx-auto p-10">
      <h1 className="text-4xl font-bold mb-4">Add a New Movie</h1>
      <form action={actions.createMovie} className="flex flex-col gap-4">
        <Label htmlFor="title">Title</Label>
        <Input type="text" name="title" required />

        <Label htmlFor="description">Description</Label>
        <textarea
          name="description"
          className="w-full p-2 border rounded"
          required
        />

        <Label htmlFor="imageUrl">Image URL</Label>
        <Input type="text" name="imageUrl" required />

        <Button type="submit">Add Movie</Button>
      </form>
    </div>
  );
};

export default AddMovie;

```

</br>

<h3 align="center" > 🐇 All-Movie Page 🦚</h3>

```dash
http://localhost:3000/all-movie
```

```TSX
//============ 🗂️app/🗂️all-movie/⚛️page.tsx ==============

import ShowMovie from "@/components/custom-components/show-movie";
import { db } from "@/utils/prisma";

const AllMovies = async () => {
  const movies = await db.movie.findMany();

  return (
    <div className="w-10/12 mx-auto p-10">
      <h1 className="text-4xl font-bold mb-4">All Movies</h1>
      <div className="grid grid-cols-3 gap-4">
        {movies.length > 0 ? (
          movies.map((movie) => <ShowMovie key={movie.id} data={movie} />)
        ) : (
          <p>No movies added yet.</p>
        )}
      </div>
    </div>
  );
};

export default AllMovies;

```

</br>

<h3 align="center" > 🐇 Components / custom-components ShowMovie 🦚</h3>

```dash
http://localhost:3000/all-movie
```

```TSX
//============ 🗂️components/🗂️custom-components/⚛️show-movie.tsx ==============

"use client";

import { ChangeEvent, useState } from "react";
import * as actions from "@/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface MovieProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const ShowMovie = ({ data }: { data: MovieProps }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [updatedMovie, setUpdatedMovie] = useState({ ...data });

  const handleUpdateMovie = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof MovieProps
  ) => {
    setUpdatedMovie((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-40 object-cover rounded"
        />
        <p className="mt-2">{data.description}</p>

        {/* Delete Button */}
        <form action={actions.deleteMovie} className="mt-4">
          <Input type="hidden" name="movieID" value={data.id} />
          <Button className="bg-red-500 px-4 py-2 text-white">Delete</Button>
        </form>

        {/* Edit Dialog */}
        <Dialog
          open={openDialog}
          onOpenChange={() => setOpenDialog(!openDialog)}
        >
          <DialogTrigger asChild>
            <Button variant="outline" className="mt-2">
              Edit
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Movie</DialogTitle>

              <form className="space-y-4" action={actions.editMovie}>
                <div>
                  <Label>Title</Label>
                  <Input
                    type="text"
                    name="title"
                    value={updatedMovie.title}
                    onChange={(e) => handleUpdateMovie(e, "title")}
                  />
                </div>

                <div>
                  <Label>Description</Label>
                  <textarea
                    name="description"
                    value={updatedMovie.description}
                    onChange={(e) => handleUpdateMovie(e, "description")}
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div>
                  <Label>Image URL</Label>
                  <Input
                    type="text"
                    name="imageUrl"
                    value={updatedMovie.image}
                    onChange={(e) => handleUpdateMovie(e, "image")}
                  />
                </div>

                <Input type="hidden" name="movieID" value={data.id} />
                <Button type="submit" onClick={() => setOpenDialog(false)}>
                  Save
                </Button>
              </form>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default ShowMovie;

```

</br>

<h3 align="center" > 🐇 Prisma Database Setup 🦚</h3>

```dash
http://localhost:3000/all-movie
```

```TS
//============  🗂️prisma/🛢️schema.prisma ==============

// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = "file:app.db"
}

model Movie {
  id          String   @id @default(uuid())
  title       String
  description String
  image       String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

```

</br>

<h3 align="center" > 🐇 Utils Prisma Setup 🦚</h3>

```dash
http://localhost:3000/all-movie
```

```TS
//============ 🗂️utils/🛢️db.ts ==============

import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

```

</br>

<h3 align="center" > 🐇 Actions / Database Actions 🦚</h3>

```dash
http://localhost:3000/all-moive
```

```TS
//============ 🗂️actions/🈳actions.ts ==============

"use server";

import { db } from "@/utils/prisma";
import { redirect } from "next/navigation";

export async function createMovie(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const image = formData.get("imageUrl") as string;

  await db.movie.create({
    data: { title, description, image },
  });

  redirect("/all-movies");
}

export async function deleteMovie(formData: FormData) {
  const movieId = formData.get("movieID") as string;
  await db.movie.delete({ where: { id: movieId } });
}

export async function editMovie(formData: FormData) {
  const movieId = formData.get("movieID") as string;
  const newTitle = formData.get("title") as string;
  const newDescription = formData.get("description") as string;
  const newImageUrl = formData.get("imageUrl") as string;

  await db.movie.update({
    where: { id: movieId },
    data: {
      title: newTitle,
      description: newDescription,
      image: newImageUrl,
    },
  });
}

```
