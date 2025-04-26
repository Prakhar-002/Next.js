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
