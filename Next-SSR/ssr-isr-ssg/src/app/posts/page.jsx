import Link from "next/link";

const PostPage = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6",
    { next: { revalidate: 300 } }
  );

  const posts = await res.json();
  return (
    <div>
      <Link href="/posts/create">Crea un post</Link>
      {posts.map((p) => (
        <article key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.body}</p>
        </article>
      ))}
    </div>
  );
};

export default PostPage;
