
<h1  align="center" >📚 𝐀𝗌𝗌𝗂𝗀𐓣ꭑ𝖾𐓣𝗍 🎧 𝚰𐓣𝗌𝗍𝗋υ𝖼𝗍𝗂ⱺ𐓣𝗌 🧋</h1>

### Exercise: Implementing Redirects in Next.js

The goal of this exercise is to practice setting up and managing redirects in a Next.js application to enhance user experience and ensure proper page navigation.

#### Instructions:

- Create a custom error page named "not-found.tsx" in the "app" directory. This page will serve as the custom not-found error page for your application.

- Implement redirects for the following scenarios:

- Create a redirection rule that redirects users from the route "/old-page" to the new page "/new-page."
- Create a rule that redirects users from a non-existing route "/non-existing" to the custom 404 error page "not-found.tsx."

</br>

<h1  align="center" > 🏕️ 𝐂ɦαᥣᥣ𝖾𐓣𝗀𝖾 🏚️</h1>

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

</br>

<h3 align="center" > 🐇 Old Page  🦚</h3>

```dash
http://localhost:3000/old-page
```

```TSX
//============ 🗂️old-page/⚛️page.tsx ============== 

import { redirect } from "next/navigation";

export default function OldPage() {
  redirect("/new-page");
}

```

</br>

<h3 align="center" > 🐇 Non Existing  Page  🦚</h3>

```dash
http://localhost:3000/non-existing
```

```TSX
//============ 🗂️non-existing/⚛️page.tsx ============== 

import { redirect } from "next/navigation";

export default function NonExistingPage() {
  redirect("/not-found");
}

```

</br>

<h3 align="center" > 🐇 Non Existing Page  🦚</h3>

```dash
http://localhost:3000/new-page
```

```TSX
//============ 🗂️new-page/⚛️page.tsx ============== 

const NewPage = () => {
  return (
    <div>
      <h1>Welcome to the New Page</h1>
      <p>This is the new page that users are redirected to from /old-page.</p>
    </div>
  );
};

export default NewPage;

```
