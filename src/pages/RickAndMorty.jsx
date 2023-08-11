import React, { useEffect, useState,useContext } from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardList } from "../components/CardList";
import { Context } from "../context";
import Loader from "../components/Loader/Loader";

const RickAndMorty = () => {

  const[characters,setCharacters]=useState([]);

  const context =useContext(Context);
  const[loader, setLoader]=useState(true);

  const getAllCharacters=()=>{
    const url="https://rickandmortyapi.com/api/character";
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
      setCharacters(data.results);
      context.rickAndMorty.characters=data.results; 
      context.redirectDetailsRoute="/rickandmorty";
    })
    .catch((error)=>{
      console.log("Error",error)
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
      {characters.length === 0 ? ( // Si no hay personajes cargados, muestra el Loader
        <Loader />
      ) : (
        <CardList list={characters} />
      )}
      <Footer>Footer</Footer>
    </>
  );
};

export default RickAndMorty;