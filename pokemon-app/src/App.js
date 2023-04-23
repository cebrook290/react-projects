import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import React, {useState} from 'react'



// const [pokemon, setPokemon] = useState(['bulbasaur, charmander'])


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
    <PokeList />
  
}

export default App;
