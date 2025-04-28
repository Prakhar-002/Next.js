<h1  align="center" > 🏕️ 𝐃𝗒𐓣αꭑ𝗂𝖼 𝐌𝖾𝗍αᑯα𝗍α 🏚️</h1>

<h3 align="center" > 🐇 Game / [ID] Page  🦚</h3>

```dash
http://localhost:3000/game/any-id
```

```TSX
//============ 🗂️game/🗂️[id]/⚛️page.tsx ============== 

type GameProps = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({ params }: GameProps) => {
  const { id } = await params;
  return {
    // Change the title of wedpage on every unique id
    title: `Game: ${id}`,
  };
};

const Game = async ({ params }: GameProps) => {
  const { id } = await params;

  return <div>Game ID: {id}</div>;
};

export default Game;

```
