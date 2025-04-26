
<h1  align="center" >📚 𝐀𝗌𝗌𝗂𝗀𐓣ꭑ𝖾𐓣𝗍 🎧 𝚰𐓣𝗌𝗍𝗋υ𝖼𝗍𝗂ⱺ𐓣𝗌 🧋</h1>

### Exercise: Linking and Navigation in Next.js

The goal of this exercise is to practice using Next.js's `<Link>` component for client-side navigation in a Next.js application.

#### Instructions:

1. Create two routes "home" and "dashboard"

2. In the "home" page, create a simple landing page with a welcoming message and some content.

3. In the "dashboard" page, create a dashboard with various components, such as a navigation menu, user profile, and other related information.

4. In the "dashboard" page, implement a navigation menu that includes links to the "home" page and other sections within the dashboard.

5. Use Next.js's `<Link>` component to create these navigation links. Ensure that clicking on these links navigates the user to the corresponding pages within the application without a full page refresh.

</br>

<h1  align="center" > 🏕️ 𝐂ɦαᥣᥣ𝖾𐓣𝗀𝖾 🏚️</h1>

<h3 align="center" > 🐇 Home Page  🦚</h3>

```dash
http://localhost:3000/
```

```TSX
//============ 🗂️App/⚛️page.tsx ============== 

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

```

</br>

<h3 align="center" > 🐇 Dashboard Page  🦚</h3>

```dash
http://localhost:3000/dashboard
```

```TSX
//============ 🗂️dashboard/⚛️page.tsx ============== 

import Link from "next/link";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/dashboard/settings">Settings</Link>
          </li>
          <li>
            <Link href="/dashboard/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Dashboard;

```

</br>

<h3 align="center" > 🐇 Dashboard/Profile Page  🦚</h3>

```dash
http://localhost:3000/dashboard/profile
```

```TSX
//============ 🗂️dashboard/🗂️profile/⚛️page.tsx ============== 

const Profile = () => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>
        Welcome to your dashboard. Here, you can manage your account settings,
        view your profile, and more.
      </p>
    </div>
  );
};

export default Profile;

```

</br>

<h3 align="center" > 🐇 Dashboard/Settings Page  🦚</h3>

```dash
http://localhost:3000/dashboard/settings
```

```TSX
//============ 🗂️dashboard/🗂️settings/⚛️page.tsx ============== 

const Settings = () => {
  return <div>Settings</div>;
};

export default Settings;

```
