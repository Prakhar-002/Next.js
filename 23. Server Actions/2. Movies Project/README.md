1. npm i prisma -D
2. npx prisma init --datasource-provider sqlite

3. Go to the .gitignore file and provide the following
   /prisma/app.db

4. Add the model

```prisma
model Movie {
  id          String   @id @default(uuid())
  title       String
  description String
  image       String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

6. Finally migrate your data

```bash

npx prisma migrate dev --name init

```
