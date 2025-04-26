const Project = async ({ params }: { params: { all: string[] } }) => {
  const { all } = await params;

  return (
    <div>
      <h1>Project {all}</h1> <br />
      <br />
      All Routes
      {all.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </div>
  );
};

export default Project;
