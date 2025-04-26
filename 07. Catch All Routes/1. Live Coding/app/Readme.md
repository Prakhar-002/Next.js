<h1  align="center" > 🏕️ 𝐒𝗄𝗂ρ 𝐑ⱺυ𝗍𝖾 🏚️</h1>

<h3 align="center" > 🐇 Home Page  🦚</h3>

```dash
http://localhost:3000/
```

```TSX
//============ 🗂️App/⚛️page.tsx ============== 

const Home = () => {
  return <div>Home</div>;
};

export default Home;

```

</br>

<h3 align="center" > 🐇 Projects Page  🦚</h3>

```dash
http://localhost:3000/projects       
```

```TSX
//============ 🗂️projects/⚛️page.tsx ============== 

const Projects = () => {
  return <div>Projects</div>;
};

export default Projects;

```

</br>

<h3 align="center" > 🐇 Projects/[All] Page  🦚</h3>


```dash
http://localhost:3000/projects/p1/p1       ✅
```
```dash
http://localhost:3000/projects/project1/project2       ✅
```
```dash
http://localhost:3000/projects/project1     ✅
```

```TSX
//============ 🗂️projects/🗂️[...all]/⚛️page.tsx ============== 

const Project = async ({ params }: { params: { all: string[] } }) => {
  const { all } = await params;

  // For any params output will be same
  // all is array ['p1', 'p2']
  // all is array ['project1', 'project2']
  // all is array ['project1']

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

```
