import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./RecipeDetail.module.css";
import stylesSpinner from "../../components/spinner.module.css";
import { getRecipeDetails, emptyRecipeDetail } from '../../actions';
import MenuPrincipal from "../menuPrincipal/MenuPrincipal";
import { Link } from "react-router-dom";


export default function RecipeDetails(props) {

    const dispatch = useDispatch();
    const id = props.match.params.id;

    useEffect(() => {
        dispatch(emptyRecipeDetail())
        dispatch(getRecipeDetails(id))
    }, [dispatch, id])

 
    const { details } = useSelector((state) => state)

    return (
        <>
            <MenuPrincipal />
            <div className={styles.containerPrincipal}>
                <h1 className={styles.title}>Recipe Detail</h1>
                <Link to={'/recipes'}
                    className={styles.backHome}>
                    🡸
                </Link>
                <div className={styles.containerCard}>
                    {
                        details.id ?
                            <div key={details.id} className={styles.card}>

                                <h2 className={styles.foodTitle}>{details.name}</h2>

                                <img src={details.img} className={styles.img} alt="photo_racipe" />

                                <p className={styles.containerPharr}>
                                  <span className={styles.dietsText}>
                                        Diets:<br/>
                                    </span> {details.diets}
                                    
                                </p>

                                <p className={styles.containerPharr}>
                                    <span className={styles.summaryText}>Summary:</span>

                                    <p dangerouslySetInnerHTML={{ __html: details.summary }}>
                                    </p>
                                </p>

                                <p className={styles.containerPharr}>
                                    <span className={styles.heatlhScoreText}>
                                        Health Score: <br />
                                    </span>{details.healthScore}
                                </p>

                                <p className={styles.containerPharr}>
                                    <span className={styles.stepsText}>
                                        steps:<br />
                                    </span>{details.steps}
                                </p>

                                {
                                    details.dishTypes ?
                                        <p className={styles.containerPharr}><span className={styles.dishText}>
                                            dishTypes: <br />
                                        </span>{details.dishTypes}
                                        </p>
                                        : null
                                }
                            </div>
                            :
                            <div className={stylesSpinner.containerSpinner}>
                                <div className={stylesSpinner.pacMan}>
                                </div>
                                <div className={stylesSpinner.loading}>Loading...
                                </div>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}