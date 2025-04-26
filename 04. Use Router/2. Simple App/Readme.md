<h1  align="center" > 🏕️ 𝐒𝗂ꭑρᥣ𝖾 𝐀ρρ 🏚️</h1>

<h3 align="center" > 🐇 Home Page  🦚</h3>

```dash
http://localhost:3000/
```

```TSX
//============ 🗂️App/⚛️page.tsx ============== 

"use client";

import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const handleNavigate = () => router.push("/about");
  const handleReplace = () => router.replace("/contact");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Welcome to the Home Page
      </h1>

      <div className="space-y-4 ">
        <button
          onClick={handleNavigate}
          className="px-6 py-3 mr-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition duration-200"
        >
          Go to About Page
        </button>
        <button
          onClick={handleReplace}
          className="px-6 py-3 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition duration-200"
        >
          Go to Contact Page
        </button>
      </div>
    </div>
  );
};

export default Home;

```

</br>

<h3 align="center" > 🐇 About Page  🦚</h3>

```dash
http://localhost:3000/about
```

```TSX
//============ 🗂️about/⚛️page.tsx ============== 

"use client";

import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  const handleBack = () => router.back();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>

      <div className="max-w-3xl text-center">
        <p className="text-lg text-gray-700 mb-4">
          Welcome to the About Page! Here at Our Company, we are dedicated to
          providing top-notch services that help individuals and businesses
          thrive. Our team is passionate about creating innovative solutions,
          fostering strong relationships, and delivering results that exceed
          expectations.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Our journey began with a simple idea: to make a real difference in the
          lives of those we serve. Through collaboration, creativity, and
          relentless dedication, we have grown into a dynamic and
          customer-centric company with a global impact. Whether you are a small
          startup or a large enterprise, we have the expertise to support your
          goals and vision.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Thank you for visiting our About Page. We invite you to explore our
          services and learn more about the amazing work we do. If you have any
          questions, feel free to reach out we would love to connect with you!
        </p>
      </div>

      <button
        onClick={handleBack}
        className="px-6 py-3 mt-6 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition duration-200"
      >
        Go Back
      </button>
    </div>
  );
};

export default About;

```

</br>

<h3 align="center" > 🐇 Contact page  🦚</h3>

```dash
http://localhost:3000/contact
```

```TSX
//============ 🗂️contact/⚛️page.tsx ============== 

"use client";

import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();
  const handleBack = () => router.back();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>

      <form className="max-w-xl w-full bg-white p-6 rounded-lg shadow-md space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-medium"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-medium"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="john.doe@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-medium"
          >
            Your Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Type your message here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition duration-200"
        >
          Send Message
        </button>
      </form>

      <button
        onClick={handleBack}
        className="px-6 py-3 mt-6 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition duration-200"
      >
        Go Back
      </button>
    </div>
  );
};

export default Contact;

```