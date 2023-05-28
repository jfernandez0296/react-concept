import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context";

const RAMDetails=()=>{
    const {id:idParam}=useParams();
    const context=useContext(Context);
    console.log("Context in details",context);

    const {rickAndMorty}=context || {};
    const {characters}=rickAndMorty || [];

    useEffect(()=>{
        const character=characters.filter((item)=> item.id==+idParam);
        console.log("character",character);
    },[]);
    
    return <div>RAMDetails: {idParam}</div>
};

export default RAMDetails;