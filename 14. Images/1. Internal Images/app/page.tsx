import Image from "next/image";
import NatureImage from "../../public/florian-van-duyn.jpg";

const Home = () => {
  return (
    <div>
      <Image src={NatureImage} alt="Nature Image" />
    </div>
  );
};

export default Home;
