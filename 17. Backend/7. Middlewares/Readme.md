<h1  align="center" > 🏕️ 𝐌𝗂ᑯᑯᥣ𝖾ωα𝗋𝖾𝗌 🏚️ </h1>

</br>

![14](https://github.com/user-attachments/assets/0c51d4f0-f3bc-41da-9b56-8027fd059222)
![15](https://github.com/user-attachments/assets/70da1f8e-5dab-460c-a38f-9dc42a1c30e9)

</br>

<h3 align="center" > 🐇 𝐒𝗂ꭑρᥣ𝖾 𝐑𝖾ᑯ𝗂𝗋𝖾𝖼𝗍𝗌  🦚</h3>

```dash
http://localhost:3000/dashboard
```

> This will redirect to 🔀

```dash
http://localhost:3000/register
```

```TSX
//============ 🗂️SimpleRedirects/⚛️middleware.ts ============== 

import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/register", request.url));
}

export const config = {
  matchers: "/dashboard",
};

```

</br>

<h3 align="center" > 🐇 𝐂ⱺ𐓣ᑯ𝗂𝗍𝗂ⱺ𐓣αᥣ 𝐑𝖾ᑯ𝗂𝗋𝖾𝖼𝗍𝗌  🦚</h3>

```dash
http://localhost:3000/dashboard
```

> This will redirect to 🔀

```dash
http://localhost:3000/register
```

```TSX
//============ 🗂️ConditionalRedirects/⚛️middleware.ts ============== 

import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/dashboard") {
    return NextResponse.redirect(new URL("/register", request.nextUrl));
  }
}

export const config = {
  matchers: "/dashboard",
};

```
