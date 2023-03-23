import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Galeria = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    handleLoadAlbums();
  }, []);

  const handleLoadAlbums = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums/")
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
  };

  return (
    <main className="flex flex-col content-center items-center justify-center bg-gray-50 w-full m-2">
      <h1 className="text-5xl m-5 font-sans">Galeria de Albuns</h1>
      <div className="flex flex-col">
        <h2 className="font-sans">Número de Albuns: {albums.length}</h2>

        {albums.map((item, index) => (
          <div className="w-screen m-5" key={index}>
            <Link to={`/albums/${item.id}`}>
              <div className="border-solid border-4 border-gray-800 p-5 mx-10 flex flex-col content-center items-center justify-center">
                <p>ID: {item.id}</p>
                <p>Nome Album: {item.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Galeria;
