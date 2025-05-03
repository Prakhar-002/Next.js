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
