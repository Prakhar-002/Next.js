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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              expedita illo? Dignissimos, aut! Labore enim quod odit nesciunt
              ipsam et, explicabo voluptate possimus velit iste sed optio
              delectus blanditiis illo id ratione molestias debitis impedit
              sequi sunt veniam. Consectetur voluptatum, rerum optio id fuga
              voluptatem? Nulla quis animi, iusto ullam blanditiis quo sunt
              accusantium laudantium, eligendi itaque quae beatae voluptate
              vitae distinctio. Culpa eligendi vero sequi inventore? Voluptates
              accusamus aliquid optio nulla, minus voluptatibus assumenda
              consequatur? Velit deleniti ab, natus odio tempora maiores
              voluptatem rem pariatur! Temporibus aliquam quibusdam repellat
              laborum molestias dolore ad eius officiis, deleniti harum quidem
              veniam.
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
