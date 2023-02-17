import Search from "../search/Search";
import styles from "./menuPrincipal.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDiets } from '../../actions';
import eggs from '../../imgs/eggs.jpg';



function MenuPrincipal() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDiets())
    }, [dispatch]);

    return (
        <>
            <div className={styles.navBar}>
                <div className={styles.containerEggs}>
                    <h2 className={styles.f}>F </h2>
                    <img src={eggs} alt="eggs" className={styles.eggs} />
                    <h2 className={styles.d}> d</h2>
                </div>
                <Search />
                <button className={styles.newRecipe}>
                    <Link to={`/recipe`} > New Recipe</Link>
                </button>
            </div>

        </>
    );
}

export default MenuPrincipal;