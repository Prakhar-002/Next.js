
<h1  align="center" >📚 𝐀𝗌𝗌𝗂𝗀𐓣ꭑ𝖾𐓣𝗍 🎧 𝚰𐓣𝗌𝗍𝗋υ𝖼𝗍𝗂ⱺ𐓣𝗌 🧋</h1>

### Exercise: Route Organization and Ignoring Routes in Next.js

The goal of this exercise is to practice organizing routes using folders and excluding certain folders from being treated as routes in a Next.js application.

#### Instructions:

1. Create the "users" folder (but it shouldn't be a route).
2. Inside the "users" folder create a "userinfo" route.
3. Inside the "app" directory create another folder name "auth" but it (shouldn't be a route).
4. Inside the "auth" folder create a login route which will only print (Please Login To See The Content)

</br>

<h1  align="center" > 🏕️ 𝐂ɦαᥣᥣ𝖾𐓣𝗀𝖾 🏚️</h1>

<h3 align="center" > 🐇 Login Page  🦚</h3>

```dash
http://localhost:3000/auth/login  ❌ 
```

```dash
http://localhost:3000/login       ✅
```

```TSX
//============ 🗂️(auth)/🗂️login/⚛️page.tsx ============== 

const Login = () => {
  return <h1>Please Login To See The Content</h1>;
};

export default Login;

```

</br>

<h3 align="center" > 🐇 UserInfo Page  🦚</h3>

```dash
http://localhost:3000/users/userinfo  ❌ 
```

```dash
http://localhost:3000/userinfo       ✅
```

```TSX
//============ 🗂️(users)/🗂️userinfo/⚛️page.tsx ============== 

const UsersInfo = () => {
  return (
    <div>
      <h1>User Information</h1>
      <p>Here are the details about the user.</p>
    </div>
  );
};

export default UsersInfo;

```
