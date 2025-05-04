<h1  align="center" > 🏕️ 𝐓ⱺᑯⱺ 𝐋𝗂𝗌𝗍 🏚️ </h1>

</br>

<h3 align="center" > 🐇 Home Page 🦚</h3>

```dash
http://localhost:3000
```

```TSX
//============ 🗂️app/⚛️page.tsx ============== 

import * as actions from "@/actions";
import SaveButton from "@/components/SaveButton";
import { db } from "@/utils/db";

const Home = async () => {
  const data = await db.todo.findMany({
    select: {
      input: true,
      id: true,
    },

    orderBy: {
      id: "desc",
    },
  });

  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 ">
        <form className="flex flex-col gap-4" action={actions.createTodo}>
          <input
            type="text"
            name="input"
            placeholder="Add a new todo..."
            className="px-4 py-2 border-2 border-pink-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <button
            type="submit"
            className="bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition duration-300"
          >
            Add Todo
          </button>
        </form>

        <div className="mt-8 space-y-4">
          {data.map((todo) => (
            <section key={todo.id} className="flex items-center">
              <form
                action={actions.editTodo}
                className="flex items-center justify-between space-x-4"
              >
                <input type="hidden" name="inputId" value={todo.id} />

                <input
                  type="text"
                  name="input"
                  defaultValue={todo.input}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                />

                <SaveButton />
              </form>

              <form action={actions.deleteTodo}>
                <input type="hidden" name="inputId" value={todo.id} />

                <button className="bg-red-500 text-white py-1.5 px-4 rounded-lg hover:bg-red-600 transition duration-300 ml-[.4rem]">
                  Delete
                </button>
              </form>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

```

</br>

<h3 align="center" > 🐇 Components SaveButton Page 🦚</h3>

```dash
http://localhost:3000
```

```TSX
//============ 🗂️components/⚛️SaveButton.tsx ============== 

"use client";
import { useFormStatus } from "react-dom";

const SaveButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-pink-500 text-white py-1.5 px-4 rounded-lg hover:bg-pink-600 transition duration-300"
      disabled={pending}
    >
      {pending ? "Saving..." : "Save"}
    </button>
  );
};

export default SaveButton;

```

</br>

<h3 align="center" > 🐇 Prisma Database Setup 🦚</h3>

```dash
http://localhost:3000
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

model Todo {
  id String @id @default(uuid())
  input String
  createdAt DateTime @default(now())
}
```

</br>

<h3 align="center" > 🐇 Utils Prisma Setup 🦚</h3>

```dash
http://localhost:3000
```

```TS
//============ 🗂️utils/🛢️db.ts ============== 

import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

```

</br>

<h3 align="center" > 🐇 Actions / Database Actions 🦚</h3>

```dash
http://localhost:3000
```

```TS
//============ 🗂️actions/🈳actions.ts ============== 

"use server";
import { db } from "@/utils/db";

export async function createTodo(formData: FormData) {
  "use server";

  const input = formData.get("input") as string;

  await db.todo.create({
    data: { input: input },
  });
}

export async function editTodo(formData: FormData) {
  "use server";

  const input = formData.get("input") as string;
  const inputId = formData.get("inputId") as string;

  await db.todo.update({
    where: { id: inputId },
    data: { input: input },
  });
}

export async function deleteTodo(formData: FormData) {
  "use server";

  const inputId = formData.get("inputId") as string;

  await db.todo.delete({
    where: { id: inputId },
  });
}

```
