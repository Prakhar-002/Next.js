// 1. Importing Zod
import { z } from "zod";

// // 2. Creating ZOD Schema (shape)
// const userSchema = z.object({
//   name: z.string(),
//   age: z.number(),
//   email: z.string().email(),
// });

// // 3. Creating actual data
// const userData = {
//   name: "HuXn",
//   age: 22,
//   email: "huxn@example.com",
// };

// 4. Parsing and Validating Data
// const validUser = userSchema.parse(userData);
// console.log(validUser);

// 5. Safe Parsing (No Error Throwing)
// const result = userSchema.safeParse({
//   name: "HuXn",
//   age: "twenty",
//   email: "invalid",
// });

// if (!result.success) {
//   console.log(result.error.format());
// }

// ------------------------------------

// 6. Optional and Default Values
// const userSchema = z.object({
//   name: z.string(),
//   age: z.number().optional(),
//   country: z.string().default("Unknown"),
// });

// const user = {
//   name: "HuXn",
//   // age: 25,
//   // country: "Egypt",
// };

// console.log(userSchema.parse(user));

// ------------------------------------
// 7. Nested Objects
// const userSchema = z.object({
//   name: z.string(),
//   address: z.object({
//     city: z.string(),
//     zipCode: z.string(),
//   }),
// });

// const user = {
//   name: "HuXn",
//   address: {
//     city: "Random City",
//     zipCode: "34204",
//   },
// };

// console.log(userSchema.parse(user));

// ------------------------------------
// 8. Arrays
// const hobbiesSchema = z.array(z.string());

// const userHobbies = ["reading", "cooking", "coding"];
// console.log(hobbiesSchema.parse(userHobbies));

// ------------------------------------
//  9. Enums
// const roleSchema = z.enum(["admin", "user", "guest"]);

// const userRole = "admin";
// // const userRole = "agent-47";
// console.log(roleSchema.parse(userRole));

// ------------------------------------
// 9. Type Inference
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

// // Test invalid data
// const invalidUser: User = {
//   name: "HuXn",
//   age: "twenty-five",
//   email: "invalid-email",
// };

// const result = userSchema.safeParse(invalidUser);
// if (!result.success) {
//   console.log("❌ Validation Errors:", result.error.format());
// } else {
//   console.log("✅ Valid User:", result.data);
// }
