<h1  align="center" > 🏕️ 𝐁ᥣⱺ𝗀𝗌 𝐏𝗋ⱺ𝗃𝖾𝖼𝗍 🏚️</h1>

<h3 align="center" > 🐇 Home Page  🦚</h3>

```dash
http://localhost:3000/
```

```TSX
//============ 🗂️App/⚛️page.tsx ============== 

const Home = () => {
  const posts = [
    { id: 1, title: "First Post", content: "This is the first blog post." },
    { id: 2, title: "Second Post", content: "This is the second blog post." },
  ];

  return (
    <div>
      <header className="bg-blue-600 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">Welcome to My Blog</h1>
        <p className="mt-2 text-lg">A place to share thoughts and ideas</p>
      </header>

      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {post.title}
                </h2>
                <p className="text-gray-600">{post.content}</p>
                <a
                  href={`/blog/${post.id}`}
                  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

```

</br>

<h3 align="center" > 🐇 Blog Page  🦚</h3>

```dash
http://localhost:3000/blog/1
```

```TSX
//============ 🗂️login/🗂️1/⚛️page.tsx ============== 

import Link from "next/link";

const FirstBlogPost = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl mx-auto">
          <div className="bg-blue-600 text-white py-6 px-6 text-center">
            <h1 className="text-4xl font-bold">First Blog Post</h1>
          </div>

          <div className="p-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <Link
              href="/"
              className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBlogPost;

```

</br>


```dash
http://localhost:3000/blog/2
```

```TSX
//============ 🗂️login/🗂️2/⚛️page.tsx ============== 

import Link from "next/link";

const SecondBlogPost = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl mx-auto">
          <div className="bg-blue-600 text-white py-6 px-6 text-center">
            <h1 className="text-4xl font-bold">Second Blog Post</h1>
          </div>

          <div className="p-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>

            <Link
              href="/"
              className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondBlogPost;

```

</br>

<h3 align="center" > 🐇 About page  🦚</h3>

```dash
http://localhost:3000/about
```

```TSX
//============ 🗂️about/⚛️page.tsx ============== 

const About = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>This is a simple blog built with Next.js 15</p>
    </div>
  );
};

export default About;

```
