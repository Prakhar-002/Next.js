
<h1  align="center" >📚 𝐀𝗌𝗌𝗂𝗀𐓣ꭑ𝖾𐓣𝗍 🎧 𝚰𐓣𝗌𝗍𝗋υ𝖼𝗍𝗂ⱺ𐓣𝗌 🧋</h1>

### Exercise: Using `useRouter` in Next.js

The goal of this exercise is to practice using the `useRouter` hook in a Next.js application for programmatic navigation and accessing route information.

#### Instructions:

1. Create two routes: "page1" and "page2".

2. In the "page1" route, create a simple landing page with a message and a button.

3. In the "page2" route, create a second page with information or content.

4. Implement a programmatic navigation from "page1" to "page2" using the `useRouter` hook from Next. When the user clicks a button on "page1," they should be navigated to "page2."

5. Verify that programmatic navigation from "page1" to "page2" works as expected, and that the route information is displayed on "page2."

</br>

<h1  align="center" > 🏕️ 𝐂ɦαᥣᥣ𝖾𐓣𝗀𝖾 🏚️</h1>

<h3 align="center" > 🐇 Page One  🦚</h3>

```dash
http://localhost:3000/page1
```

```TSX
//============ 🗂️page1/⚛️page.tsx ============== 

"use client";

import { useRouter } from "next/navigation";

const PageOne = () => {
  const router = useRouter();

  const goToPage2 = () => router.push("/page2");

  return (
    <div>
      <h1>Welcome to Page 1</h1>
      <button onClick={goToPage2}>Go to Page 2</button>
    </div>
  );
};
export default PageOne;

```

</br>

<h3 align="center" > 🐇 Page Two  🦚</h3>

```dash
http://localhost:3000/page2
```

```TSX
//============ 🗂️page2/⚛️page.tsx ============== 

"use client";

import { useRouter } from "next/navigation";

const PageTwo = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Welcome to Page 2</h1>
      <p>You're now on page 2!</p>
      <button onClick={() => router.back()}>Back</button>
    </div>
  );
};

export default PageTwo;

```
