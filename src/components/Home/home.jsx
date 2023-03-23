import { Link } from "react-router-dom"


const Home = () => {
    return (
        <main className="flex flex-col content-center items-center justify-center bg-gray-50 h-full w-full m-2 p-2">
            <h1 className="text-5xl m-5">Bem vindo</h1>
            <div className="flex flex-col">
            
            <Link to="/galeria"><button className="m-2 bg-gray-900 p-5 text-xl text-gray-100 rounded-full py-3 px-6">Conferir Galeria</button></Link>
            </div>
        </main>
    )
}

export default Home