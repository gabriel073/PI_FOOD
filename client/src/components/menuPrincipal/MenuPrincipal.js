import Search from "../search/Search";
import Filtros from "../filtros/Filtros";
import styles from "./menuPrincipal.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDiets } from '../../actions';


function MenuPrincipal() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDiets())                 
    }, [dispatch]);
  
    return (
        <div className={styles.navBar}>
            <Link to={`/`}className={styles.linkHome}>Go Home</Link>
            <Search />
            <Link to={`/recipe`}className={styles.newRecipe}>+ New Recipe</Link>
            <Filtros />
        </div>
    );
}

export default MenuPrincipal;