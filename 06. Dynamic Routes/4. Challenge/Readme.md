
<h1  align="center" >📚 𝐀𝗌𝗌𝗂𝗀𐓣ꭑ𝖾𐓣𝗍 🎧 𝚰𐓣𝗌𝗍𝗋υ𝖼𝗍𝗂ⱺ𐓣𝗌 🧋</h1>

### Challenge: Create a Dynamic User Profile Page

1. Create a dynamic route to display user profiles based on their ID.

2. **What should happen:**
   - If you visit `/users/1`, the page should display "User Profile: 1".
   - If you visit `/users/2`, the page should display "User Profile: 2".
   - The page should dynamically change based on the ID in the URL.

</br>

<h1  align="center" > 🏕️ 𝐂ɦαᥣᥣ𝖾𐓣𝗀𝖾 🏚️</h1>

<h3 align="center" > 🐇 Users Page  🦚</h3>

```dash
http://localhost:3000/users/[id]    ✅
```

```TSX
//============ 🗂️users/🗂️[id]/⚛️page.tsx ============== 

const UserProfile = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div>
      <h1>User Profile: {id}</h1>
    </div>
  );
};

export default UserProfile;

```
