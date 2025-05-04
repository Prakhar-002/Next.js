<h1  align="center" > 🏕️ 𝐅ⱺ𝗋ꭑ 𝐕αᥣ𝗂ᑯα𝗍𝗂ⱺ𐓣𝗌 🏚️ </h1>

</br>

![form](https://github.com/user-attachments/assets/d7653287-c737-4fe8-abbd-ce7dedc194fb)

</br>

<h3 align="center" > 🐇 Install Dependency 🦚</h3>

```dash
npx create-next-app@latest
npx shadcn@latest init
npx shadcn@latest add button card form input label
```

</br>

<h3 align="center" > 🐇 Home Page 🦚</h3>

```dash
http://localhost:3000
```

```TSX
//============ 🗂️app/⚛️page.tsx ==============

"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@/schema";
import { createUser } from "@/actions";
import { z } from "zod";

const SignUp = () => {
  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signupSchema>) {
    const result = await createUser(values);

    return result.status === "error"
      ? console.log(result.message)
      : console.log(result.message);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold">
            Sign Up
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              {[
                { name: "name", label: "Name", placeholder: "Enter Your Name" },
                { name: "email", label: "Email", placeholder: "Enter Your Email" },
                { name: "password", label: "Password", placeholder: "Enter Your Password" },
              ].map(({ name, label, placeholder }) => (
                <div key={name}>
                  <FormField
                    name={name}
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{label}</FormLabel>
                        <FormControl>
                          <Input placeholder={placeholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}

              <Button className="w-full" type="submit">
                Sign Up
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;

```

</br>

<h3 align="center" > 🐇 ZOD Schema 🦚</h3>

```dash
http://localhost:3000
```

```TS
//============ 🗂️schema/🈳index.ts ==============

import { z } from "zod";

// ------ SIMPLE VALIDATION --------
export const simpleSignUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// ------ COMPLEX VALIDATION -------
export const signupSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),

  email: z
    .string()
    .email("Invalid email address")
    .refine((val) => val.endsWith("@gmail.com") || val.endsWith("@yahoo.com"), {
      message: "Only Gmail and Yahoo emails are allowed",
    }),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must not exceed 20 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[@$!%*?&]/,
      "Password must contain at least one special character (@$!%*?&)"
    ),
});

```

</br>

<h3 align="center" > 🐇 Actions / Database Actions 🦚</h3>

```dash
http://localhost:3000
```

```TS
//============ 🗂️actions/🈳actions.ts ==============

"use server";

import { signupSchema } from "@/schema";
import { z } from "zod";

export async function createUser(values: z.infer<typeof signupSchema>) {
  const result = signupSchema.safeParse(values);

  if (!result.success) {
    return { status: "error", message: result.error.message };
  }

  // console.log(values.name, values.email, values.password);

  return { status: "success", message: "User created successfully" };
}

```
