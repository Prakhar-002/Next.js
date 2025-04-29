<h1  align="center" > 🏕️ 𝐋ⱺαᑯ𝗂𐓣𝗀 🏚️</h1> 

</br>

![1](https://github.com/user-attachments/assets/aa920d45-66c7-4587-8d28-788480c4d822)
![2](https://github.com/user-attachments/assets/121f927e-69eb-45b9-b971-85389346fb66)

</br>

<h3 align="center" > 🐇 Home Page  🦚</h3>

```dash
http://localhost:3000/
```

```TSX
//============ 🗂️App/⚛️page.tsx ============== 

const Home = () => {
  return <div>Home</div>;
};

export default Home;

```

</br>

<h3 align="center" > 🐇 Users Page  🦚</h3>

```dash
http://localhost:3000/users       
```

```TSX
//============ 🗂️users/⚛️page.tsx ============== 

const Users = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Content is currently loading...");
    }, 4000)
  );

  return <h1>Users Page</h1>;
};

export default Users;

```

</br>

<h3 align="center" > 🐇 Users / Loading Page  🦚</h3>

```dash
http://localhost:3000/users
```

```TSX
//============ 🗂️users/⚛️loading.tsx ============== 

const Loading = () => {
  return <div>Loading...</div>;
};

export default Loading;

```
