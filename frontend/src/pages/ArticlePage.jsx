import { useParams, useLoaderData } from "react-router-dom";
import articles from "../article-content";
import axios from "axios";

export default function ArticlePage() {
  const { name } = useParams();
  const { upvotes } = useLoaderData();

  const article = articles.find((a) => a.name === name);
  if (!article) {
    return <h1>Article not found!</h1>;
  }

  return (
    <>
      <h1>{article.title}</h1>
      <h2>Upvotes: {upvotes}</h2>
      {article.content.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </>
  );
}

export async function ArticleLoader({ params }) {
  const response = await axios.get(`/api/articles/${params.name}`);
  const { upvotes, comments } = response.data;
  return { upvotes, comments };
}
