"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  console.log("-----", router);

  const navigate = (page: string) => {
    router.push(`/${page}`);
  };

  return (
    <main>
      <h1>Routing | Navigation</h1>
      <Link href="/login">Login</Link> <br />
      <Link href="/about">About</Link> <br />
      <button onClick={() => router.push("/colors")}>Go To Colors</button>
      {/* Alternative (create separate function) */}
      <button onClick={() => navigate("login")}>Go To Login Page</button>
    </main>
  );
}
