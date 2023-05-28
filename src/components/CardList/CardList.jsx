import React from "react";
import {Card} from "./Card";

import "./card_list.scss";
import { useNavigate } from "react-router-dom";


const CardList =({list})=>{
  const navigate=useNavigate();
  console.log(list)
  
  const goToDetails=(id)=>{
    console.log("click...go");
    //redirect to details
    navigate(`/rickandmorty/${id}`);
    
  };

    return(

    <div className="card-list">
      {list.length>=1 &&
      list.map(({id,image,name}, index)=>(
        <Card 
        key={index}
        name={name}
        image={image}
        id={id}
        handleClick={goToDetails}/>
      ))};  
    </div> 
    )
}

export default CardList;