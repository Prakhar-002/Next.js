<h1  align="center" > 🏕️ 𝐔𝗌𝖾 𝐑ⱺυ𝗍𝖾𝗋 🏚️</h1>

<h3 align="center" > 🐇 Home Page  🦚</h3>

```dash
http://localhost:3000/
```

```TSX
//============ 🗂️App/⚛️page.tsx ============== 

"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  console.log("-----", router);

  const navigate = (page: string) => {
    router.push(`/${page}`);
  };

  return (
    <main>
      <h1>Routing | Navigation</h1>
      <Link href="/login">Login</Link> <br />
      <Link href="/about">About</Link> <br />
      <button onClick={() => router.push("/colors")}>Go To Colors</button>
      {/* Alternative (create separate function) */}
      <button onClick={() => navigate("login")}>Go To Login Page</button>
    </main>
  );
}

```

</br>

<h3 align="center" > 🐇 color Page  🦚</h3>

```dash
http://localhost:3000/color
```

```TSX
//============ 🗂️color/⚛️page.tsx ============== 

const Colors = () => {
  return <div>Colors</div>;
};

export default Colors;

```

</br>

<h3 align="center" > 🐇 About page  🦚</h3>

```dash
http://localhost:3000/users/about
```

```TSX
//============ 🗂️about/⚛️page.tsx ============== 

import Link from "next/link";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link href="/">Home</Link>
    </div>
  );
};

export default About;

```

</br>

<h3 align="center" > 🐇 Login page  🦚</h3>

```dash
http://localhost:3000/login
```

```TSX
//============ 🗂️login/⚛️page.tsx ============== 

import Link from "next/link";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Link href="/about">About</Link>
    </div>
  );
};

export default Login;

```
