<h1  align="center" > 🏕️ 𝐒𝖾𝗋𝗏𝖾𝗋 𝐒𝗂ᑯ𝖾 𝐃α𝗍α 𝐅𝖾𝗍𝖼ɦ𝗂𐓣𝗀 🏚️ </h1>

</br>

<h3 align="center" > 🐇 Todos Page 🦚</h3>

```dash
http://localhost:3000/todos
```

```TSX
//============ 🗂️todos/⚛️page.tsx ============== 

const TodoComponent = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log(data);

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
};

export default TodoComponent;

```

</br>

<h3 align="center" > 🐇 Todos Loading Page 🦚</h3>

```dash
http://localhost:3000/todos
```

```TSX
//============ 🗂️todos/⚛️loading.tsx ============== 

const Loading = () => {
  return <div>Loading...</div>;
};

export default Loading;

```

</br>

<h3 align="center" > 🐇 Todos Error Page 🦚</h3>

```dash
http://localhost:3000/todos
```

```TSX
//============ 🗂️todos/⚛️error.tsx ============== 

"use client";

const ErrorBoundary = () => {
  return (
    <div>
      <h1>Oooo Noo Error</h1>
    </div>
  );
};

export default ErrorBoundary;

```
