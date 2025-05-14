import express from "express";

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;

const articleinfo = [
  { name: "learn-react", comment: [], upvotes: 0 },
  { name: "learn-node", comment: [], upvotes: 0 },
  { name: "mangodb", comment: [], upvotes: 0 },
];

app.post("/api/articles/:name/upvote", (req, res) => {
  const { name } = req.params;
  const article = articleinfo.find((article) => article.name === name);
  if (article) {
    article.upvotes += 1;
    res.status(200).json(article.upvotes);
  } else {
    res.status(404).json({ message: "Article not found" });
  }
});

app.post("/api/articles/:name/comments", (req, res) => {
  const { name } = req.params;
  const { postedby, text } = req.body;
  const article = articleinfo.find((article) => article.name === name);
  if (article) {
    article.comment.push({ postedby, text });
    res.status(200).json(article.comment);
  } else {
    res.status(404).json({ message: "Article not found" });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
