const Members = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Content is currently loading...");
    }, 4000)
  );

  return <div className="border p-[10rem] w-[30rem]">Members</div>;
};

export default Members;
