<h1  align="center" > 🏕️ 𝐒𝗄𝗂ρ 𝐑ⱺυ𝗍𝖾 🏚️</h1>

<h3 align="center" > 🐇 Login Page  🦚</h3>

```dash
http://localhost:3000/login
```

```TSX
//============ 🗂️login/⚛️page.tsx ============== 

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};

export default Login;

```

</br>

<h3 align="center" > 🐇 Login Layout Page  🦚</h3>


<h3 align="center" > This file will appear on every route starting with login route</h3>

```dash
http://localhost:3000/login
```

```TSX
//============ 🗂️login/⚛️layout.tsx ============== 

import Link from "next/link";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ul className="login-menu">
        <li>
          <Link href="/login">Login Main</Link>
        </li>
        <li>
          <Link href="/login/loginuser">Login Regular User</Link>
        </li>
        <li>
          <Link href="/login/loginadmin">Login Admin</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default Layout;

```

</br>

<h3 align="center" > 🐇 Login/LoginUser Page  🦚</h3>

```dash
http://localhost:3000/login/loginuser
```

```TSX
//============ 🗂️login/🗂️loginuser/⚛️page.tsx ============== 

const LoginStudent = () => {
  return <h1>Login Regular User 👤 </h1>;
};

export default LoginStudent;

```