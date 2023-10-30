This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Stack
Nextjs 13.5.6
Material UI 5.14.15

Graphql 16.8.1
Appollo Server 4.9.4
Apollo Client 3.8.6

## Getting Started

First, run the development server: And open [ocalhost](http://localhost:3000/)

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## About 
It's a kanban board for agile project management, it visualizes how work is being done. 

### Features
1. Ability to create columns, rename and delete them.
2. Create tasks within the columns
3. Drag drop tasks from one column to another


# So, what's inside the folders.

## 1. Components.
Here we have our components. Inside this e have `ui` which will contain the re-usable components for the entire app.
The other folders will represent a `page`. e.g `index` holds components specific to the `index` page.

## 2. Config
The configuration files for the app, you can have common configs here e.g theme..

## 3. Data
This will act as our database, holds the JSON files for persisting data.

## 4. Graphql
Graphql configs are here. We have the set up for Apollo client, Server Schema and Resolvers defined here.
Also we have our `.gql` mutations and queries. Each .gql file is one of these.

## 5. Pages
It's a next.js app, here we have our views, basically the components that represent pages. We only have one page 
so there is only the index page. But wait, we have api here too...

## 6. Pages/api
In next.js this directory is treated as an API endpoint instead of a page. This means that everithing inside here 
will run on the server and not client. Thanks to that, we can have our Apollo Server running here. So it's possible
to access server modules e.g database queries, FileSystem... , instead of having a different app to handle a minimal
server, this is sufficient.