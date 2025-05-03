<h1  align="center" > 🏕️ 𝐏α𝗋𝖾𐓣𝗍 𝐀𝖿𝖿𝖾𝖼𝗍𝗂𐓣𝗀 𝐂ɦ𝗂ᥣᑯ𝗋𝖾𐓣𝗌 🏚️ </h1>

</br>

<h3 align="center" > 🐇 Dashboard Page 🦚</h3>

```dash
http://localhost:3000/dashboard
```

```TSX
//============ 🗂️dashboard/⚛️page.tsx ============== 

"use client";

import Password from "@/components/Password";
import Profile from "@/components/Profile";
import Settings from "@/components/Settings";

const Dashboard = () => {
  return (
    <div>
      {/* All of these components are now client
       components because the parent is client component */}
      <Settings />
      <Profile />
      <Password />
    </div>
  );
};

export default Dashboard;

```

</br>

<h3 align="center" > 🐇 Components 🦚</h3>

```dash
http://localhost:3000/dashboard
```

```TSX
//============ 🗂️components/⚛️password.tsx ============== 

const Password = () => {
  console.log("Password Component");
  return <div>Password</div>;
};

export default Password;

```

</br>

<h3 align="center" > 🐇 Components 🦚</h3>

```dash
http://localhost:3000/dashboard
```

```TSX
//============ 🗂️components/⚛️profile.tsx ============== 

const Profile = () => {
  console.log("Profile Component");
  return <div>Profile Component</div>;
};

export default Profile;

```

</br>

<h3 align="center" > 🐇 Components 🦚</h3>

```dash
http://localhost:3000/dashboard
```

```TSX
//============ 🗂️components/⚛️settings.tsx ============== 

const Settings = () => {
  console.log("Settings Component");
  return <div>Settings Component</div>;
};

export default Settings;

```
