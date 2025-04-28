type GameProps = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({ params }: GameProps) => {
  const { id } = await params;
  return {
    title: `Game: ${id}`,
  };
};

const Game = async ({ params }: GameProps) => {
  const { id } = await params;

  return <div>Game ID: {id}</div>;
};

export default Game;
