<h1  align="center" > 🏕️ 𝐖𝗂𝗍ɦ 𝐏α𝗋αᥣᥣ𝖾ᥣ 𝐑ⱺυ𝗍𝖾𝗌 🏚️</h1>

</br>

<h3 align="center" > 🐇 Members Page  🦚</h3>

```dash
http://localhost:3000/members
```

```TSX
//============ 🗂️App/🗂️members/⚛️page.tsx ============== 

const Members = () => {
  return <>Members</>;
};

export default Members;

```

</br>

<h3 align="center" > 🐇 Members Layout Page  🦚</h3>

```dash
http://localhost:3000/members
```

```TSX
//============ 🗂️App/🗂️members/⚛️layout.tsx ============== 

import { ReactNode } from "react";
import "../globals.css";

type LayoutProps = {
  children: ReactNode;
  team: ReactNode;
  comments: ReactNode;
};

export const metadata = {
  title: "Members",
  description: "members page",
};

const Layout = ({ children, team, comments }: LayoutProps) => {
  return (
    <>
      <section>{children}</section>
      <section className="border p-[10rem] w-[30rem]">{team}</section>
      <section className="border p-[10rem] w-[30rem]">{comments}</section>
    </>
  );
};

export default Layout;

```

</br>

<h3 align="center" > 🐇 Members Default Page  🦚</h3>

```dash
http://localhost:3000/members
```

```TSX
//============ 🗂️App/🗂️members/⚛️default.tsx ============== 

const Default = () => {
  return (
    <div>
      <h1>This is some default content coming from the default.tsx file.</h1>
    </div>
  );
};

export default Default;

```

</br>

> Using parallel Routing 

</br>

<h3 align="center" > 🐇 Members / @Comments (as component) Page  🦚</h3>

```dash
http://localhost:3000/members
```

```TSX
//============ 🗂️members/🗂️@comments/⚛️page.tsx ============== 

const Comments = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Content is currently loading...");
    }, 4000)
  );

  return <section>Comments</section>;
};

export default Comments;

```

</br>

<h3 align="center" > 🐇 Members / @Comments Loading Page  🦚</h3>

```dash
http://localhost:3000/members
```

```TSX
//============ 🗂️members/🗂️@comments/⚛️loading.tsx ============== 

const Loading = () => {
  return <div>Loading...</div>;
};

export default Loading;

```

</br>

<h3 align="center" > 🐇 Members / @Comments Default Page  🦚</h3>

```dash
http://localhost:3000/members
```

```TSX
//============ 🗂️members/🗂️@comments/⚛️Default.tsx ============== 

const Default = () => {
  return (
    <div>
      <h1>This is some default content coming from the default.tsx file.</h1>
    </div>
  );
};

export default Default;

```

</br>

---

</br>

<h3 align="center" > 🐇 Members / @Team (as component) Page  🦚</h3>

```dash
http://localhost:3000/members
```

```TSX
//============ 🗂️members/🗂️@team/⚛️page.tsx ============== 

import Link from "next/link";

const TeamMembers = () => {
  // if (2 < 5) {
  //   throw new Error("Error happened");
  // }

  return (
    <>
      <h1>TeamMembers</h1>
      <Link href="/members/salaries">Check Out My Salaries</Link>
    </>
  );
};

export default TeamMembers;

```

</br>

<h3 align="center" > 🐇 Members / @Team Error Page  🦚</h3>

```dash
http://localhost:3000/members
```

```TSX
//============ 🗂️members/🗂️@team/⚛️error.tsx ============== 

"use client";

const ErrorBoundary = () => {
  return (
    <div>
      <h1>Oooo Noooo Some Error Occurred</h1>
    </div>
  );
};

export default ErrorBoundary;

```

</br>

<h3 align="center" > 🐇 Members / @Team / Salaries Page  🦚</h3>

```dash
http://localhost:3000/members/salaries
```

```TSX
//============ 🗂️members/🗂️@team/🗂️salaries/⚛️page.tsx ============== 

const Salaries = () => {
  return (
    <div>
      <h1>Check out my billion dollars salary in am month</h1>
    </div>
  );
};

export default Salaries;

```