<h1  align="center" > 🏕️ 𝐑𝖾ᑯ𝗂𝗋𝖾𝖼𝗍  🏚️ </h1> 

A **redirect** in Next.js means **automatically sending the user** from one URL to another URL.  

It is used to:
- Guide users to a new page
- Handle outdated URLs
- Manage authentication flows
- Improve SEO (using permanent redirects)

Next.js provides **three ways** to handle redirects:
1. **Static Redirects** using `next.config.js` (at build time)
2. **Dynamic Redirects** inside server components using `redirect()` function
3. **Middleware Redirects** based on conditions like authentication or headers