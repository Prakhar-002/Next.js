import Image from "next/image";
import NatureImage from "../../public/florian-van-duyn.jpg";

const Home = () => {
  return (
    <div>
      <Image
        src="https://images.unsplash.com/photo-1475776408506-9a5371e7a068?q=80&w=3916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Nature Image"
        width={400}
        height={400}
      />
    </div>
  );
};

export default Home;
