import React from 'react'
import styles from "./Filtros.module.css"
import { useDispatch } from 'react-redux'
import { orderRecipe } from '../../actions';

export default function Filtros() {
    const dispatch = useDispatch();

    const handleSelectChange = (e) => {
        dispatch(orderRecipe(e.target.value))
        console.log(e.target.value)

    }

    return (
        <div className={styles.containerSelectOrd}>

            <label className={styles.labels}>Order By</label>
            <select name="ordenamiento" className={styles.ordenar} onChange={handleSelectChange}>
                <option value="original">Original</option>
                <option value="alfaAsc">A-Z</option>
                <option value="alfaDesc">Z-A</option>
                <option value="scoreMin">min score</option>
                <option value="scoreHigh">high score</option>
            </select>


            <label className={styles.labels}>Types Diets</label>
            <select name="dietType" className={styles.filtrar}>
                <>
                    <option value="1">Types Diets</option>
                    <option value="2">filtro 2</option>
                    <option value="3">filtro 3</option>
                </>
            </select>

        </div>
    )
}
