
<h1  align="center" >📚 𝐀𝗌𝗌𝗂𝗀𐓣ꭑ𝖾𐓣𝗍 🎧 𝚰𐓣𝗌𝗍𝗋υ𝖼𝗍𝗂ⱺ𐓣𝗌 🧋</h1>

### Exercise: Basic Routing in Next.js

The goal of this exercise is to create a simple Next.js application with multiple pages and implement basic routing using Next.js's built-in routing system.

#### Instructions:

1. Create a new Next.js project.

2. Create two routes named "about" and "contact".

3. Verify that you can navigate between the "about" and "contact" pages.

</br>

<h1  align="center" > 🏕️ 𝐂ɦαᥣᥣ𝖾𐓣𝗀𝖾 🏚️</h1>

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

<h3 align="center" > 🐇 Contact Page  🦚</h3>

```dash
http://localhost:3000/contact
```

```TSX
//============ 🗂️contact/⚛️page.tsx ============== 

const Contact = () => {
  return <h1>Hello From Contact Page</h1>;
};

export default Contact;

```

</br>

<h3 align="center" > 🐇 About page  🦚</h3>

```dash
http://localhost:3000/about
```

```TSX
//============ 🗂️about/⚛️page.tsx ============== 

const About = () => {
  return <h1>Hello From About Page</h1>;
};

export default About;

```
