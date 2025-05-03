<h1  align="center" > 🏕️ 𝐂ᥣ𝗂𝖾𐓣𝗍 𝐎𐓣ᥣ𝗒 𝐂ⱺᑯ𝖾 🏚️ </h1>

</br>

![11](https://github.com/user-attachments/assets/63a21a11-8eca-43a5-b6e7-c02539e80c88)

</br>

![12](https://github.com/user-attachments/assets/f9fc191c-937b-4968-82e7-15ec8279c72b)

</br>

<h3 align="center" > 🐇 Lib /Utils Page 🦚</h3>

```dash
http://localhost:3000/
```

```TSX
//============ 🗂️lib/⚛️utils.ts ============== 

import "client-only";

export const add = (a: number, b: number) => a + b;
export const subtract = (a: number, b: number) => a - b;

```

</br>

![13](https://github.com/user-attachments/assets/c9b46356-3208-4281-9120-655ced4a0126)

</br>

<h3 align="center" > 🐇 Client Side Component 🦚</h3>

```dash
http://localhost:3000/client-component
```

```TSX
//============ 🗂️client-component/⚛️page.tsx ============== 

"use client";

import { add, subtract } from "@/lib/utils";

const ClientComponent = () => {
  const result = add(1, 2);
  const result2 = subtract(1, 2);
  console.log(result);
  console.log(result2);

  return <div>Client Component</div>;
};

export default ClientComponent;

```

</br>

![14](https://github.com/user-attachments/assets/1a27cb0e-49b9-41ee-ae30-992855e821a4)

</br>

<h3 align="center" > 🐇 Server Side Component 🦚</h3>

```dash
http://localhost:3000/server-component
```

```TSX
//============ 🗂️server-component/⚛️page.tsx ============== 

import { add, subtract } from "@/lib/utils";

const ServerComponent = () => {
  const result = add(1, 2);
  const result2 = subtract(1, 2);
  console.log(result);
  console.log(result2);

  return <div>Server Component</div>;
};

export default ServerComponent;

```
