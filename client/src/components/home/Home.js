import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRecipes } from "../../actions";


export default function Home() {
    const dispatch = useDispatch();
    // const [query, setQuery] = useState("");

    const { recipes } = useSelector(state => state)



    useEffect(() => {
        dispatch(getRecipes())
    }, [])

    //  console.log(recipes) // -----> me devuele vacio -->[]

    // const handleChange = (q) => {
    //     setQuery(q);
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    // }

    return (
        <div className="container_principal">
            <h1>Recetas</h1>
            {
                // <section>
                //     <form onSubmit={(e) => handleSubmit(e)}>
                //         <input type="text"
                //             placeholder="Search..."
                //             onChange={(e) => handleChange(e.target.value)}
                //         />
                //     </form>
                // </section>
            }

            <div className="container_cards">
                {
                    recipes ?
                        recipes.map((r) => (
                            <Link to={`/recipes:${r.id}`}>
                            <div key={r.id}>
                                <h2>{r.title}</h2>
                                <img src={r.img} alt="photo_racipe" />
                                <p>Diets: {r.diets}</p>
                            </div>
                            </Link>
                        )
                        )
                        : "Cargando.... Aqui Va el spinner"           }
            </div>
        </div>
    )
}


