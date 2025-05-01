<h1  align="center" > 🏕️ 𝐖𝗂𝗍ɦⱺυ𝗍 𝐏α𝗋αᥣᥣ𝖾ᥣ 𝐑ⱺυ𝗍𝖾𝗌 🏚️</h1>

</br>

<h3 align="center" > 🐇 Members Page  🦚</h3>

```dash
http://localhost:3000/members
```

```TSX
//============ 🗂️App/🗂️members/⚛️page.tsx ============== 

const Members = () => {
  return (
    <div>
      <h1 className="m-5">Here is some random content</h1>
    </div>
  );
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

import Members from "@/components/members";
import Comments from "@/components/comments";

const MembersLayout = ({ children }: ReactNode) => {
  return (
    <div>
      <h1>{children}</h1>
      <div className="flex">
        <Members />
        <Comments />
      </div>
    </div>
  );
};

export default MembersLayout;

```

</br>

<h3 align="center" > 🐇 Comments Components  🦚</h3>

```dash
http://localhost:3000/members
```

```TSX
//============ 🗂️components/⚛️comments.tsx ============== 

const Comments = () => {
  // if (2 < 5) {
  //   throw new Error("Error");
  // }

  return <div className="border p-[10rem] w-[30rem]">Comments</div>;
};

export default Comments;

```

</br>

<h3 align="center" > 🐇 Members Components  🦚</h3>

```dash
http://localhost:3000/members
```

```TSX
//============ 🗂️components/⚛️Members.tsx ============== 

const Members = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Content is currently loading...");
    }, 4000)
  );

  return <div className="border p-[10rem] w-[30rem]">Members</div>;
};

export default Members;

```
