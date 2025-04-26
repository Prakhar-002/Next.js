import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the landing page of the website. Feel free to explore!</p>
      <Link href="/dashboard">
        <a>Go to Dashboard</a>
      </Link>
    </div>
  );
};

export default Home;
