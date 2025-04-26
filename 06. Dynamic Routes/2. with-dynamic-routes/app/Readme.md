<h1  align="center" > 🏕️ 𝐖𝗂𝗍ɦⱺυ𝗍 𝐃𝗒𐓣αꭑ𝗂𝖼 𝐑ⱺυ𝗍𝖾𝗌 🏚️</h1>

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

<h3 align="center" > 🐇 UsersList Page  🦚</h3>

```dash
http://localhost:3000/userslist
```

```TSX
//============ 🗂️userslist/⚛️page.tsx ============== 

import Link from "next/link";

const UsersList = () => {
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        <li>
          <Link href="/userslist/alex">Alex</Link>
        </li>
        <li>
          <Link href="/userslist/jordan">Jordan</Link>
        </li>
        <li>
          <Link href="/userslist/huxn">HuXn</Link>
        </li>
        <li>
          <Link href="/userslist/john">John</Link>
        </li>
      </ul>
    </div>
  );
};

export default UsersList;

```

</br>

<h3 align="center" > 🐇 UsersList/[User] Page  🦚</h3>

```dash
http://localhost:3000/userslist/[user]
```

```TSX
//============ 🗂️userslist/🗂️[user]/⚛️page.tsx ============== 

const User = async ({ params }: { params: { user: string } }) => {
  const { user } = await params;
  console.log(user);

  return (
    <div>
      <h1>Info About {user}</h1>
      <p>Hello I&apos;m {user}</p>
    </div>
  );
};

export default User;

```
