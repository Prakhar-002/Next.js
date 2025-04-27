const Users = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Content is currently loading...");
    }, 4000)
  );

  return <h1>Users Page</h1>;
};

export default Users;
