import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getRecipeDetails } from '../../actions';



export default function RecipeDetails() {

    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getRecipeDetails(id))
    }, [useDispatch])


    const { details } = useSelector((state) => state)



// console.log(details)


    return (
        <div className="container_principal">
            <h1>Detalles de la receta</h1>

                {console.log(details)}
            <div className="container_cards">
                {
                    details ?                   
                        <div key={details.id}>
                                <h2>{details.title}</h2>
                              <img src={details.img} alt="photo_racipe"/>
                                {/* <p>Diets: {details.diets}</p>
                                <p>Summary:{details.summary}</p>
                                <p>Health Score:{details.healthScore}</p>  */}
                                {/* <p>Steps:{d.analyzedInstructions.steps}</p>   //----> Array */}
                            </div>
                    
                        : "Cargando.... Aqui Va el spinner"
                }
            </div>
        </div>
    )
}