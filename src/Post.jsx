export default function Post({ post }) {
  console.log(post);
  const { title, body } = post;
  return (
    <div className="card">
      <h4>Title: {title}</h4>
      <p>Body: {body}</p>
    </div>
  );
}
