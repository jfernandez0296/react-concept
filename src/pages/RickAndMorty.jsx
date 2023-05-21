import React, { useEffect, useState } from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardList } from "../components/CardList";

const RickAndMorty = () => {

  const[characters,setCharacters]=useState([]);
  const[loader, setLoader]=useState(true);

  const getAllCharacters=()=>{
    const url="https://rickandmortyapi.com/api/character";
    fetch(url).then(Response=>Response.json())
    .then(data=>setCharacters(data.results))
    .catch(()=>{
      console.log("Error",console.error)
  });
  //const { characters } = useCharacters("ram");
};

  // Rendered
  useEffect(() => {
    setLoader(false);
    getAllCharacters(); 
  }, []);

  return (
    <>
      <Header>Header</Header>
      {loader && <div> Loading...</div>}
      <CardList list={characters}/>
      <Footer>Footer</Footer>
    </>
  );
};

export default RickAndMorty;