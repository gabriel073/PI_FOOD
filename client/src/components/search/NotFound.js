import React from 'react';
import {  useHistory } from 'react-router-dom';
import recipeNotFound from '../../imgs/recipeNotFound2.jpg';
import styles from "./search.module.css";
import { useDispatch } from 'react-redux';
import { searchRecipe } from "../../actions";

const NotFound = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(searchRecipe(""));
        history.push('/recipes');
    }


    return (
        <>
          
            <button onClick={handleClick}
                className={styles.backHome}>
                🡸
            </button>

            <div className={styles.containerErrorNoFound}>
                <img className={styles.errorNoFound} src={recipeNotFound} alt={'RecipeNotFound'} />
            </div>
        </>
    );
}

export default NotFound;
