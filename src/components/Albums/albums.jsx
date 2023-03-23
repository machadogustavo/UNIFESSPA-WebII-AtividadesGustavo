import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import axios from "axios";

const Albums = () => {
  const { idAlbum } = useParams();
  console.log(idAlbum);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums/${idAlbum}/`)
      .then(function (response) {
        console.log(response.data);
        return response.data;
      })
      .then(function (json) {
        setAlbums(json);
      })
      .catch(function (error) {
        alert(error)
      })

    axios
      .get(`https://jsonplaceholder.typicode.com/albums/${idAlbum}/photos`)
      .then(function (response) {
        return response.data;
      })
      .then(function (json) {
        setPhotos(json);
      })
      .catch(function (error) {
        alert(error)
      })
  }, [idAlbum]);

  return (
    <main className="flex flex-col content-center items-center justify-center bg-gray-50 w-full m-2">
      <h1 className="flex flex-col text-5xl m-5 font-sans">
        Album{" "}
        <span className="text-base underline underline-offset-2">
          {albums.title}
        </span>
      </h1>
      <h1 className="font-sans">ID: {idAlbum}</h1>

      <div className="flex flex-col">
        <h2 className="font-sans">Número de Photos: {photos.length}</h2>
        <ul className="grid grid-cols-3 gap-x-5 mx-5 flex-wrap justify-center">
          {photos.map((photo) => (
            <div>
              <Link to={`/albums/${idAlbum}/photos/${photo.id}`}>
                <li key={photo.id} className=" max-w-150 flex flex-col my-2">
                  <img className="w-30" src={photo.thumbnailUrl} />
                  <p className="text-xs max-w-1">{photo.title}</p>
                </li>
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Albums;
