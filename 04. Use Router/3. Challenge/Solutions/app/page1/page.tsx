"use client";

import { useRouter } from "next/navigation";

const PageOne = () => {
  const router = useRouter();

  const goToPage2 = () => router.push("/page2");

  return (
    <div>
      <h1>Welcome to Page 1</h1>
      <button onClick={goToPage2}>Go to Page 2</button>
    </div>
  );
};
export default PageOne;
