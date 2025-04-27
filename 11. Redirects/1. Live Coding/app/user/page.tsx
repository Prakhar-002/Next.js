import { redirect } from "next/navigation";

const Users = () => {
  redirect("/about");

  return <div>Users</div>;
};

export default Users;
