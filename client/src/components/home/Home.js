import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRecipes } from "../../actions";
import styles from "./Home.module.css";
import stylesSpinner from "../../components/spinner.module.css";
import LinkHome from "../LinkHome/LinkHome";
import Search from "../search/Search";
import Filtros from "../filtros/Filtros";




export default function Home() {
    const dispatch = useDispatch();
    const { filteredRecipes } = useSelector(state => state);
    const [pagina, setPagina] = useState(0);



    useEffect(() => {
        dispatch(getRecipes())  
    }, [dispatch])


    const handleAddPagina = () => {
        setPagina(pagina + 1);
        window.scrollTo(0, 0);
    }

    const handleMinus = () => {
        setPagina(pagina - 1);
        window.scrollTo(0, 0);
    }

    const itemsPorPagina = 9;
    const offset = pagina * itemsPorPagina;
    const limit = offset + itemsPorPagina;
    const currentRecipes = filteredRecipes.slice(offset, limit);

      
    return (
        <>
        <div className={styles.navBar}>
            <Search />
            <Filtros />
        </div>
     
            <div className={styles.containerPrincipal}>
                          <h1 className={styles.title}>Recipes</h1>
          <LinkHome/>
                <div className={styles.containerCards}>
                    {currentRecipes.length > 0 ?
                        currentRecipes.map((r) => (
                            <div key={r.id} className={styles.card}>
                                <Link to={`/recipes/${r.id}`}>
                                    <h2 className={styles.foodTitle}>{r.title}</h2>
                                    <img src={r.img} alt="photo_racipe" />
                                    <p className={styles.foodText}>Diets: {r.diets}</p>
                                </Link>
                            </div>
                        )
                        )
                        : <div className={stylesSpinner.containerSpinner}><div className={stylesSpinner.pacMan}></div><div className={stylesSpinner.loading}>Loading...</div> </div>}
                </div>
            </div>     
    
        <div className={styles.containerPaginacion}>
                
                    {pagina > 0 && <button className={styles.btnAtras} onClick={handleMinus}> Atras </button>}
                        
                    <button className={styles.btnAdelante} onClick={handleAddPagina}> Adelante </button>
            
            </div>
        </>
    )
}









