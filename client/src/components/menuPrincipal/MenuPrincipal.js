import Search from "../search/Search";
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
        <>
            <div className={styles.navBar}>
                <h2>Food</h2>
                <Search />
                <button className={styles.newRecipe}>
                    <Link to={`/recipe`} > New Recipe</Link>
                </button>
            </div>

        </>
    );
}

export default MenuPrincipal;