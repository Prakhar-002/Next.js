<h1  align="center" > 🏕️ 𝐄𝗋𝗋ⱺ𝗋 𝐇α𐓣ᑯᥣ𝗂𐓣𝗀 🏚️</h1> 

# ❌ `error.tsx` in Next.js

The `error.tsx` file is a **special file** in Next.js used to **handle errors** that occur during rendering in a route segment.

- It **automatically catches** rendering errors from its own route or child routes.
- It **displays a custom UI** (like an error message, button to retry, etc.) instead of crashing the entire app.
- It helps create a **better user experience** during unexpected failures.

## 📌 Key Points:

- Located inside your route folder:  
  Example: `/app/dashboard/error.tsx`
- It **only handles errors** in that specific route segment.
- You can create a **Reset Button** to let users retry the route.

</br>

![4](https://github.com/user-attachments/assets/018045a6-966d-4da9-8af0-89c83b6f78af)
![3](https://github.com/user-attachments/assets/80b89b1c-38e5-43f0-bd9f-60d02c4de350)

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

<h3 align="center" > 🐇 Dashboard Page  🦚</h3>

```dash
http://localhost:3000/dashboard    
```

```TSX
//============ 🗂️dashboard/⚛️page.tsx ============== 

const Dashboard = () => {
  if (2 < 5) {
    throw new Error("Error in Dashboard");
  }

  return <div>Dashboard</div>;
};

export default Dashboard;

```

</br>

<h3 align="center" > 🐇 Dashboard / Error Page  🦚</h3>

```dash
http://localhost:3000/dashboard    
```

```TSX
//============ 🗂️dashboard/⚛️error.tsx ============== 

"use client";

const ErrorBoundary = () => {
  return <div>Error In Dashboard Page</div>;
};

export default ErrorBoundary;

```
