import styles from "./Filtros.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { orderRecipe, filterRecipe } from '../../actions';


export default function Filtros() {
    const dispatch = useDispatch();

    const { diets } = useSelector(state => state);

    const handleSelectChange = (e) => {
        dispatch(orderRecipe(e.target.value))
    }

    function handleSelectDiets(e) {
        e.preventDefault();
        dispatch(filterRecipe(e.target.value));
    }

    return (
        <>
            <div className={styles.containerSelectOrd}>
                <label className={styles.labels}>Order By</label>
                <div className={styles.rowOrder}>
                <ion-icon name="chevron-down-outline"></ion-icon>
                </div>
                <select name="ordenamiento" className={styles.ordenar} onChange={handleSelectChange}>
                    <option value="original">All</option>
                    <option value="alfaAsc">A-Z</option>
                    <option value="alfaDesc">Z-A</option>
                    <option value="scoreMin">min score</option>
                    <option value="scoreHigh">high score</option>
                </select>
                <label className={styles.labels}>Types Diets</label>
                <div className={styles.rowFilter}>
                <ion-icon name="chevron-down-outline" ></ion-icon>
                </div>
                <select name="dietType" className={styles.filtrar} onChange={(e) => handleSelectDiets(e)} >
                    <option value="">All</option>
                    {diets && diets.map((d) => (
                        <option key={d.name} value={d.name}>{d.name}</option>
                    ))}
                </select>
            </div>
        </>
    )
}
