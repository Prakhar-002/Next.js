<h1  align="center" > 🏕️ 𝐖𝗂𝗍ɦ 𝐓𝖾ꭑρᥣα𝗍𝖾 🏚️</h1>

<h3 align="center" > 🐇 Games Page  🦚</h3>

```dash
http://localhost:3000/games
```

```TSX
//============ 🗂️games/⚛️page.tsx ============== 

const Games = () => {
  return <div>Games</div>;
};

export default Games;

```

</br>

<h3 align="center" > 🐇 Games Layout Page  🦚</h3>

<h3 align="center" > This file will appear on every route starting with games route </h3>

```dash
http://localhost:3000/games
```

```TSX
//============ 🗂️games/⚛️template.tsx ============== 

"use client";

import Link from "next/link";
import { useState } from "react";

const Layout = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Hello"
        className="border border-black"
      />
      <br />
      <Link className="bg-teal-300" href="/analytics/revenue">
        Revenue
      </Link>{" "}
      <br />
      <Link className="bg-teal-300" href="/analytics/stats">
        Stats
      </Link>
    </div>
  );
};

export default Layout;

```

</br>

<h3 align="center" > 🐇 Games / Revenue Page  🦚</h3>

```dash
http://localhost:3000/games/revenue
```

```TSX
//============ 🗂️games/🗂️revenue/⚛️page.tsx ============== 

const Revenue = () => {
  return <div>Revenue</div>;
};

export default Revenue;

```

</br>

<h3 align="center" > 🐇 Games / Stars Page  🦚</h3>

```dash
http://localhost:3000/games/stars
```

```TSX
//============ 🗂️games/🗂️stars/⚛️page.tsx ============== 

const Stats = () => {
  return <div>Stats</div>;
};

export default Stats;

```