<h1  align="center" > 🏕️ 𝚰𐓣𝗍𝖾𝗋𐓣αᥣ 𝚰ꭑα𝗀𝖾𝗌 🏚️</h1>

<h3 align="center" > 🐇 Home Page  🦚</h3>

```dash
http://localhost:3000/
```

```TSX
//============ 🗂️App/⚛️page.tsx ============== 

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

```

</br>

<h3 align="center" > 🐇 Public Folder image  🦚</h3>

<img src="./public/florian-van-duyn.jpg" />