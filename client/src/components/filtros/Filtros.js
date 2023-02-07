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
                <select name="ordenamiento" className={styles.ordenar} onChange={handleSelectChange}>
                    <option value="original">Original</option>
                    <option value="alfaAsc">A-Z</option>
                    <option value="alfaDesc">Z-A</option>
                    <option value="scoreMin">min score</option>
                    <option value="scoreHigh">high score</option>
                </select>
                <label className={styles.labels}>Types Diets</label>
                <select name="dietType" className={styles.filtrar} onChange={(e) => handleSelectDiets(e)} >
                    <option value="">Original</option>
                    {diets && diets.map((d) => (
                        <option key={d.name} value={d.name}>{d.name}</option>
                    ))}
                </select>
            </div>
        </>
    )
}
