<h1  align="center" > 🏕️ 𝐖𝗂𝗍ɦ 𝐋α𝗒ⱺυ𝗍 🏚️</h1>

<h3 align="center" > 🐇 Analytics Page  🦚</h3>

```dash
http://localhost:3000/analytics
```

```TSX
//============ 🗂️analytics/⚛️page.tsx ============== 

const Analytics = () => {
  return <div>Analytics</div>;
};

export default Analytics;

```

</br>

<h3 align="center" > 🐇 analytics Layout Page  🦚</h3>

<h3 align="center" > This file will appear on every route starting with analytics route </h3>

```dash
http://localhost:3000/analytics
```

```TSX
//============ 🗂️analytics/⚛️layout.tsx ============== 

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

<h3 align="center" > 🐇 Analytics / Revenue Page  🦚</h3>

```dash
http://localhost:3000/analytics/revenue
```

```TSX
//============ 🗂️analytics/🗂️revenue/⚛️page.tsx ============== 

const Revenue = () => {
  return <div>Revenue</div>;
};

export default Revenue;

```

</br>

<h3 align="center" > 🐇 Analytics / Stars Page  🦚</h3>

```dash
http://localhost:3000/analytics/stars
```

```TSX
//============ 🗂️analytics/🗂️stars/⚛️page.tsx ============== 

const Stats = () => {
  return <div>Stats</div>;
};

export default Stats;

```