"use client";
import { useRouter } from "next/navigation";

const PageTwo = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Welcome to Page 2</h1>
      <p>You're now on page 2!</p>
      <button onClick={() => router.back()}>Back</button>
    </div>
  );
};

export default PageTwo;
