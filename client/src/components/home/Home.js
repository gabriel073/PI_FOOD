import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom";
import { getRecipes } from "../../actions";
import styles from "./Home.module.css";
import stylesSpinner from "../../components/spinner.module.css";
import MenuPrincipal from "../menuPrincipal/MenuPrincipal";
import Filtros from '../filtros/Filtros';
import  {Redirect, useLocation}  from 'react-router-dom';


export default function Home() {
    const dispatch = useDispatch();
    let { filteredRecipes, recipes } = useSelector(state => state);

    const location = useLocation();
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
            <Redirect to="/notFound" state={{ from: location }} />        
        )
    } else {
        const totalItems = filteredRecipes.length;
        const cantPaginas = Math.ceil(totalItems / itemsPorPagina) - 1;
        const pageNumbers = [];
        const currentRecipes = filteredRecipes.slice(offset, limit);

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

                    <div className={styles.containerPaginacion}>
                        {pagina > 0 &&
                            <button onClick={() => handleMinus(pagina - 1)}>
                                <div className={styles.btnAtras}>
                                    <ion-icon name="play-back-outline"></ion-icon>
                                </div>
                            </button>
                        }

                        {pageNumbers.length > 0 &&
                            pageNumbers.map((p, i) => {
                                return (
                                    <div className={styles.btnPaginacion}>
                                        <ion-button fill="outline" onClick={() => handleAddPagina(p)} disabled={i === pagina} key={i}>{p + 1}</ion-button>
                                    </div>
                                );
                            })}

                        {pagina < cantPaginas &&
                            <button onClick={() => handleAddPagina(pagina + 1)}>
                                <div className={styles.btnAdelante}>
                                    <ion-icon name="play-forward-outline"></ion-icon>
                                </div>
                            </button>
                        }
                    </div>

                    <div className={styles.containerCards}>
                        {
                            currentRecipes.length > 0 ? currentRecipes.map((r) => (
                                <div className={styles.card}>
                                    <ion-card key={r.id} >
                                        <Link to={`/recipes/${r.id}`}>
                                            <div className={styles.imgCard}>
                                                <img alt="photo_racipe" className={styles.imgCard} src={r.img} />
                                            </div>

                                            <ion-card-header>
                                                <ion-card-title>{r.name}</ion-card-title>
                                                <div className={styles.diets}>
                                                    <ion-card-subtitle >Diets: {r.diets}</ion-card-subtitle>
                                                </div>
                                            </ion-card-header>

                                        </Link>
                                    </ion-card>
                                </div>
                            )
                            )
                                :
                              
                                    
                              <div className={styles.containerLoading}><h2 className={styles.loading}>Loading...<div className={styles.reloj}>⏳</div></h2></div>                                   
                             
                        }
                    </div>
                </div>
            </>
        )
    }
}









