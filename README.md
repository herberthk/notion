# Fullstack Notion Clone

### Key Features:

- Real-time database  🔗 
- Notion-style editor 📝 
- Light and Dark mode 🌓
- Infinite children documents 🌲
- Trash can & soft delete 🗑️
- Authentication 🔐 
- File upload
- File deletion
- File replacement
- Icons for each document (changes in real-time) 🌠
- Expandable sidebar ➡️🔀⬅️
- Full mobile responsiveness 📱
- Publish your note to the web 🌐
- Fully collapsable sidebar ↕️
- Landing page 🛬
- Cover image of each document 🖼️
- Recover deleted files 🔄📄

### Tech-stack
- Typescript
- Next.js 13
- Convex for backend as service
- Clerk for Authentication
- TailwindCSS for UI
- Edgestore for managing file uploads
- Zustand for state management
- Strict eslint rules


### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/herberthk/notion
```

### Install packages

```shell
npm i
```

### Setup .env file

Check `.env.example` for environment variables

```ts
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
```
Can be obtained from [convex](https://www.convex.dev/)
```ts
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```
Can be obtained from [Clerk](https://clerk.com/)
```ts
EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```
Can be obtained from [Edge store](https://edgestore.dev/)

 Create convex template in clerk dashboard and copy domain url and paste to convex config file on domain property

 Run `npm run gen-env` to generate environment variable types

<!-- # Deployment used by `npx convex dev` -->
### Setup Convex

```shell
npx convex dev

```

### Start the app

```shell
npm run dev
```
