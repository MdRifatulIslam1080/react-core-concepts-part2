export default function Album({ album }) {
  console.log(album);
  const { title, id } = album;
  return (
    <div className="card">
      <h2>Id: {id}</h2>
      <h3>Title: {title}</h3>
    </div>
  );
}
