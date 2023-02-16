import  React,  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRecipes } from "../../actions";
import styles from "./Home.module.css";
import stylesSpinner from "../../components/spinner.module.css";
import MenuPrincipal from "../menuPrincipal/MenuPrincipal";
import recipeNotFound from '../../imgs/recipeNotFound2.jpg';
import Filtros from '../filtros/Filtros';


export default function Home() {
    const dispatch = useDispatch();
    let { filteredRecipes, recipes } = useSelector(state => state);


    const [pagina, setPagina] = useState(0);

    useEffect(() => {
        if (recipes.length === 0) {
            dispatch(getRecipes())
        }
    }, [dispatch, recipes.length])

    const handleAddPagina = (value) => {
        setPagina(value);
        window.scrollTo(0, 0);
    }

    const handleMinus = () => {
        setPagina(pagina - 1);
        window.scrollTo(0, 0);
    }

    const itemsPorPagina = 9;
    const offset = pagina * itemsPorPagina;
    const limit = offset + itemsPorPagina;
    if (typeof filteredRecipes === "string") {
        return (
            <>
                <div>
                    <MenuPrincipal />
                    <div className={styles.containerErrorNoFound}>
                        <img className={styles.errorNoFound} src={recipeNotFound} alt={'RecipeNotFound'} />
                    </div>

                </div>
            </>
        )
    } else {
        const totalItems = filteredRecipes.length;
        const cantPaginas = Math.ceil(totalItems / itemsPorPagina) - 1;
        const pageNumbers = [];
              const currentRecipes = filteredRecipes.slice(offset, limit);
              console.log(filteredRecipes)
        for (let i = 0; i <= cantPaginas; i++) {
            pageNumbers.push(i);
        }
        return (
            <>         
                <MenuPrincipal />
                <div className={styles.containerPrincipal}>
                    <div>
                        <Filtros />
                    </div>
                  
                    <div className={styles.containerCards}>
                         {currentRecipes.length > 0 ?
                            currentRecipes.map((r) => (
                                <div key={r.id} className={styles.card}>
                                    <Link to={`/recipes/${r.id}`}>
                                        <h2 className={styles.foodTitle}>{r.name}</h2>
                                        <img src={r.img} alt="photo_racipe" />
                                        <p className={styles.foodText}>Diets: {r.diets}</p>
                                    </Link> 
                                </div> 
                             ) 
                             ) 
                             :                            
                             <div className={stylesSpinner.containerSpinner}>
                                 <div className={stylesSpinner.pacMan}>
                                 </div>
                                 <div className={stylesSpinner.loading}>Loading...
                                 </div>
                             </div>
    
                          } 
                    </div>
                   
                
                    <div className={styles.containerPaginacion}>
                     {pagina > 0 && <button className={styles.btnAtras} onClick={handleMinus}> Atras </button>}
                        {pageNumbers.length > 0 &&
                            pageNumbers.map((p, i) => {
                                return (
                                    <button
                                        disabled={i === pagina}
                                        className={styles.btnPaginacion}
                                        key={i}
                                        onClick={() => handleAddPagina(p)}>
                                        {p + 1}
                                    </button>
                                );
                            })}
                        {pagina < cantPaginas && <button className={styles.btnAdelante} onClick={() => handleAddPagina(pagina + 1)}> Adelante </button>}
                    </div>
                    </div>
            </>
        )
    }
}









