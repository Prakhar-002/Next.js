<h1  align="center" > 🏕️ Redirect 🏚️</h1>

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

<h3 align="center" > 🐇 User Page  🦚</h3>

```dash
http://localhost:3000/user       
```

```TSX
//============ 🗂️user/⚛️page.tsx ============== 

import { redirect } from "next/navigation";

const Users = () => {
  redirect("/about");

  return <div>Users</div>;
};

export default Users;

```
</br>

<h3 align="center" > 🐇 About Page  🦚</h3>

```dash
http://localhost:3000/about       
```

```TSX
//============ 🗂️about/⚛️page.tsx ============== 

const About = () => {
  return <h1>User redirected to About Page</h1>;
};

export default About;

```
