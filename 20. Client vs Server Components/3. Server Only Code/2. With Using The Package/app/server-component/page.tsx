import { add, subtract } from "@/lib/utils";

const ServerComponent = () => {
  const result = add(1, 2);
  const result2 = subtract(1, 2);
  console.log(result);
  console.log(result2);

  return <div>Server Component</div>;
};

export default ServerComponent;
