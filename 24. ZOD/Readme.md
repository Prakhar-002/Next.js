<h1  align="center" > 🏕️ 𝒵𝒪𝒟 🏚️ </h1>

</br>

# 🧪 Zod – TypeScript-First Schema Validation Library

</br>

<h3  align="center" > 

<img src="https://github.com/user-attachments/assets/0204bcd6-d5a6-4525-aea2-dee13425a940" width="250px" height="198px"/>

</br>
</br>

**Zod** is a **TypeScript-first schema declaration and validation library**.  
It’s used to define schemas for data and **validate** data objects safely, with full TypeScript inference.

</h3>

</br>

## 🚀 Why Use Zod?

✅ Type-safe validation  
✅ Runtime schema checking  
✅ Works great with React, Next.js, and forms  
✅ Useful for APIs, forms, props, etc.  
✅ Zero dependencies

</br>

## 📦 Installation

```bash
npm install zod
```

> Or

```bash
yarn add zod
```

</br>

<h3 align="center" > 🐇 1. Importing Zod 🦚</h3>

```TS
//============ 🈳main.ts ==============

import { z } from "zod";

```

</br>

<h3 align="center" > 🐇 2. Creating ZOD Schema (shape) 🦚</h3>

```TS
//============ 🈳main.ts ==============

const userSchema = z.object({
  name: z.string(),
  age: z.number(),
  email: z.string().email(),
});

```

</br>

<h3 align="center" > 🐇 3. Creating actual data 🦚</h3>

```TS
//============ 🈳main.ts ==============

const userData = {
  name: "HuXn",
  age: 22,
  email: "huxn@example.com",
};

```

</br>

<h3 align="center" > 🐇 4. Parsing and Validating Data 🦚</h3>

```TS
//============ 🈳main.ts ==============

const validUser = userSchema.parse(userData);
console.log(validUser);

```

</br>

<h3 align="center" > 🐇 5. Safe Parsing (No Error Throwing) 🦚</h3>

```TS
//============ 🈳main.ts ==============

const result = userSchema.safeParse({
  name: "HuXn",
  age: "twenty",
  email: "invalid",
});

if (!result.success) {
  console.log(result.error.format());
}

```

</br>

<h3 align="center" > 🐇 6. Optional and Default Values 🦚</h3>

```TS
//============ 🈳main.ts ==============

const userSchema = z.object({
  name: z.string(),
  age: z.number().optional(),
  country: z.string().default("Unknown"),
});

const user = {
  name: "HuXn",
  // age: 25,
  // country: "Egypt",
};

console.log(userSchema.parse(user));

```

</br>

<h3 align="center" > 🐇 7. Nested Objects 🦚</h3>

```TS
//============ 🈳main.ts ==============

const userSchema = z.object({
  name: z.string(),
  address: z.object({
    city: z.string(),
    zipCode: z.string(),
  }),
});

const user = {
  name: "HuXn",
  address: {
    city: "Random City",
    zipCode: "34204",
  },
};

console.log(userSchema.parse(user));

```

</br>

<h3 align="center" > 🐇 8. Arrays 🦚</h3>

```TS
//============ 🈳main.ts ==============

const hobbiesSchema = z.array(z.string());

const userHobbies = ["reading", "cooking", "coding"];
console.log(hobbiesSchema.parse(userHobbies));

```

</br>

<h3 align="center" > 🐇 9. Enums 🦚</h3>

```TS
//============ 🈳main.ts ==============

const roleSchema = z.enum(["admin", "user", "guest"]);

const userRole = "admin";    // Success -> admin
const userRole = "agent-47"; // Error
console.log(roleSchema.parse(userRole));

```

</br>

<h3 align="center" > 🐇 10. Type Inference 🦚</h3>

```TS
//============ 🈳main.ts ==============

// You can infer TypeScript types from Zod schemas.

// Define the schema
const userSchema = z.object({
  name: z.string(),
  age: z.number(),
  email: z.string().email(),
});

// Infer TypeScript type from schema
type User = z.infer<typeof userSchema>;

// Test valid data
const validUser: User = {
  name: "HuXn",
  age: 22,
  email: "huxn@example.com",
};

try {
  const parsedUser = userSchema.parse(validUser);
  console.log("✅ Valid User:", parsedUser);
} catch (error) {
  console.error("❌ Error:", error);
}

// Test invalid data
const invalidUser: User = {
  name: "HuXn",
  age: "twenty-five",
  email: "invalid-email",
};

const result = userSchema.safeParse(invalidUser);

if (!result.success) {
  console.log("❌ Validation Errors:", result.error.format());
} else {
  console.log("✅ Valid User:", result.data);
}

```
