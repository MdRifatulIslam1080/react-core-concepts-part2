import { use } from "react";
import Album from "./Album";

export default function Albums({ albumsPromise }) {
  const albums = use(albumsPromise);

  return (
    <div className="card2">
      <h3>Albums:{albums.length}</h3>
      {albums.map((album) => (
        <Album key={album.id} album={album}></Album>
      ))}
    </div>
  );
}
