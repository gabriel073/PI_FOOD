import Search from "../search/Search";
import Filtros from "../filtros/Filtros";
import styles from "./menuPrincipal.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDiets } from '../../actions';
import imgNavBar from '../../imgs/verduras-navBar.jpg'


function MenuPrincipal() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDiets())                 
    }, [dispatch]);
  
    return (
        <div className={styles.navBar}>
            <img className={styles.imgNavBar} src={imgNavBar}/>
            <Link to={`/`}className={styles.linkHome}>Go Home</Link>
            <Search />
            <Link to={`/recipe`}className={styles.newRecipe}>+ New Recipe</Link>
            <Filtros />
        </div>
    );
}

export default MenuPrincipal;