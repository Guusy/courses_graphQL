
# Courses GraphQL API

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

### MongoDB

#### Indexes

```js
db.getCollection("courses").createIndex({"$**":"text"})
db.getCollection("students").createIndex({"$**":"text"})
```