
# Courses GraphQL API

Simple API of courses made with graphQL

## Technologies
- GraphQL
- Express
- MongoDB

## Run project

Install dependencies

```bash
npm install
```

Start the app in dev mode

```bash
npm run dev
```

Open `http://localhost:3000/api` and start playing with the queries

Start the app in production mode

```bash
npm run start
```

### MongoDB

#### Indexes
You need to create the following `indexes` to run `searchItems` query

```js
db.getCollection("courses").createIndex({"$**":"text"})
db.getCollection("students").createIndex({"$**":"text"})
```