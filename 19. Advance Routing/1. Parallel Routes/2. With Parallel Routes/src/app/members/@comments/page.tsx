const Comments = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Content is currently loading...");
    }, 4000)
  );

  return <section>Comments</section>;
};

export default Comments;
