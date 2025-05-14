import express from "express";

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;

const articleinfo = [
  { name: "async", comment: [], upvotes: 0 },
  { name: "async", comment: [], upvotes: 0 },
  { name: "async", comment: [], upvotes: 0 },
];

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
