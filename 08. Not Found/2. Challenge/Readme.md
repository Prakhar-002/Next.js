
<h1  align="center" >📚 𝐀𝗌𝗌𝗂𝗀𐓣ꭑ𝖾𐓣𝗍 🎧 𝚰𐓣𝗌𝗍𝗋υ𝖼𝗍𝗂ⱺ𐓣𝗌 🧋</h1>

### Exercise: Creating a Custom "Not Found" Page in Next.js

The goal of this exercise is to practice creating a custom "Not Found" (404) page in a Next.js application to improve the user experience when accessing non-existing routes.

#### Instructions:

1. In your Next.js project, create a custom error page named "not-found.tsx" in the "app" directory. This page will serve as the custom "Not Found" page for your application.

2. Customize the "not-found.tsx" page with a message or content to inform users that the page they are looking for does not exist.

3. Verify that when accessing a non-existing route, users are redirected to the custom "Not Found" page (not-found.tsx) and see the message you provided.

</br>

<h1  align="center" > 🏕️ 𝐂ɦαᥣᥣ𝖾𐓣𝗀𝖾 🏚️</h1>

</br>

![image](https://github.com/user-attachments/assets/3af95cd4-96e0-411f-90dd-25c245b4fa2c)

</br>

<h3 align="center" > 🐇 Not Found Page  🦚</h3>

```dash
http://localhost:3000/any-unknown-route
```

```TSX
//============ 🗂️app/⚛️not-found.tsx ============== 

import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#3E1F00] via-gray-900 to-black p-8">
      <div className="text-center p-8 bg-gray-800 shadow-2xl rounded-2xl max-w-lg w-full border border-gray-700">
        <h1 className="text-5xl font-extrabold text-[#D2691E] mb-6 drop-shadow-lg">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-md text-gray-400 mb-6">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-[#8B4513] text-white font-semibold rounded-full hover:bg-[#A0522D] transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

```
