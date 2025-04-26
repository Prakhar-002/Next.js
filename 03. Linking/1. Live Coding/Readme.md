<h1  align="center" > 🏕️ 𝐋𝗂𐓣𝗄𝗂𐓣𝗀 🏚️</h1>

<h3 align="center" > 🐇 Home Page  🦚</h3>

```dash
http://localhost:3000/
```

```TSX
//============ 🗂️App/⚛️page.tsx ============== 

import Navbar from './components/navbar';

const Home = () => {
  return 
  <>
    <div>Next.js Complete Course 🐻‍❄️</div>;

    {/* Render the Navbar component here  */}
    <Navbar />
  </>
};

export default Home;

```

</br>

<h3 align="center" > 🐇 Profile Page  🦚</h3>

```dash
http://localhost:3000/profile
```

```TSX
//============ 🗂️app/🗂️profile/⚛️page.tsx ============== 

const Portfolio = () => {
  return <h1>This is Portfolio Page</h1>;
};

export default Portfolio;

```

</br>

<h3 align="center" > 🐇 About page  🦚</h3>

```dash
http://localhost:3000/about
```

```TSX
//============ 🗂️app/🗂️about/⚛️page.tsx ============== 

const About = () => {
  return <h1>This is About Page</h1>;
};

export default About;

```

</br>

<h3 align="center" > 🐇 External Component 🦚</h3>


<h4 align="center" > 🐇 Linking Method 🦚</h4>

```dash
http://localhost:3000/
```

```TSX
//============ 🗂️components/⚛️Navbar.tsx ============== 

import Link from "next/link";

// Must render this component in your app directory in page.tsx file 👆🏻
const Navbar = () => {
  return (
    <nav>
      <ul>
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div>
          <Link className="link" href="/">
            Home
          </Link>
          <Link className="link" href="/about">
            About
          </Link>
          <Link className="link" href="/portfolio">
            Portfolio
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

```
