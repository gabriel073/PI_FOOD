import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { uploadRecipe } from "../../actions";
import styles from "./newRecipe.module.css";
import imgForm from "../../imgs/homeRecetas.jpg";

export default function NewRecipe() {
    const dispatch = useDispatch();
    const history = useHistory();

    const { diets: allDiets } = useSelector(state => state);

    const [nameError, setNameError] = useState(false);
    const [summaryError, setSummaryError] = useState(false);
    const [healthScoreError, setHealthScoreError] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [stepsError, setStepsError] = useState(false);
    const [dietsError, setDietsError] = useState(false);
    let [recipe, setRecipe] = useState({
        name: "",
        summary: "",
        healthScore: 0,
        image: "",
        steps: "",
        diets: [],
    });

    const handleInputsChange = (e) => {
        setNameError(false);
        setSummaryError(false);
        setHealthScoreError(false);
        setImageError(false);
        setStepsError(false);
        setDietsError(false);


        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value,
        });
    };

    const patternText = new RegExp('^[A-Z]+$', 'i');
    const patternURL = new RegExp(/[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setNameError(false);
        setSummaryError(false);
        setHealthScoreError(false);
        setImageError(false);
        setStepsError(false);
        setDietsError(false);

        if (!recipe.name || !patternText.test(recipe.name)) {
            return setNameError("enter a title correct for your recipe");
        }
        if (!recipe.summary) {
            return setSummaryError("enter a summary correct for your recipe");
        }
        if (parseInt(recipe.healthScore) < 0 || parseInt(recipe.healthScore) > 100) {
            return setHealthScoreError("enter a healthScore correct for your recipe");
        }
        if (!patternURL.test(recipe.img)) {
            return setImageError("enter format url image");
        }

        dispatch(uploadRecipe(recipe));

        setRecipe({
            name: "",
            summary: "",
            healthScore: 0,
            img: "",
            steps: "",
            diets: [],
        });
        alert("recipe created successfully!");
    }

    const handleBackSubmit = (e) => {
        e.preventDefault();
        history.push("/recipes");
    }

    const handleMultiSelectChange = (e) => {
        setDietsError(false)
        const value = Array.from(
            e.target.selectedOptions,
            (option) => option.value
        );
        setRecipe({
            ...recipe,
            [e.target.name]: value,
        });
    };

    return (
        <>
         
            <div className={styles.containerPrincipal} >
                <div className={styles.containerForm}>
                    <div className={styles.containerBackHome}>
                        <Link to={'/recipes'}
                            className={styles.backHome}>
                            🡸 Back
                        </Link>
                    </div>
                    <div className={styles.titleFormDiv}>
                        <h1 className={styles.titleForm}>
                            {" "}
                            YOUR <span className={styles.titleRecipe}>RECIPE</span>
                        </h1>
                    </div>
                    <div className={styles.containerImgForm}>
                       <img className={styles.imgForm}  alt="photo_form" src={imgForm}/>
                    </div>

                    <form className={styles.form} action="POST" >
                        <label className={styles.titleInput}>Name: </label>
                        <input
                            placeholder="Ej: Strawberries with cream"
                            type="text"
                            name="name"
                            className={styles.input}
                            value={recipe.name}
                            onChange={handleInputsChange} />
                        *required field

                        <div className={styles.danger}>
                            {nameError && <p>{nameError}</p>}
                        </div>

                        <label className={styles.titleInput}>Summary: </label>
                        <input
                            placeholder="Ej: fresh sweet and sour"
                            type="text"
                            name="summary"
                            className={styles.input}
                            value={recipe.summary}
                            onChange={handleInputsChange} />
                        *required field

                        <div className={styles.danger}>
                            {summaryError && <p>{summaryError}</p>}
                        </div>

                        <label className={styles.titleInput}>Health Score: </label>
                        <input
                            placeholder=" 0 - 100"
                            type="number"
                            name="healthScore"
                            min="0"
                            max="100"
                            step="1"
                            className={styles.input}
                            value={recipe.healthScore}
                            onChange={handleInputsChange} />

                        *required field
                        <div className={styles.danger}>
                            {healthScoreError && <p>{healthScoreError}</p>}
                        </div>

                        <label className={styles.titleInput}>Image: </label>
                        <input
                            placeholder="URL ej: http://..."
                            type="text"
                            name="img"
                            className={styles.input}
                            value={recipe.img}
                            onChange={handleInputsChange} />

                        <div className={styles.dangerImg}>
                            {imageError && <p>{imageError}</p>}
                        </div>

                        <label className={styles.titleInput}>steps:</label>
                        <textarea
                            placeholder="Ej: 1.Washes strawberries"
                            type="text"
                            name="steps"
                            className={styles.input}
                            value={recipe.steps}
                            onChange={handleInputsChange} />

                        <div className={styles.danger}>
                            {stepsError && <p>{stepsError}</p>}
                        </div>

                        <label className={styles.titleInput}>Select Diets Types:</label>
                        <select className={styles.select}
                            placeholder="Select Diets Types"
                            name="diets"
                            multiple size="6"
                            onChange={handleMultiSelectChange}>
                            {allDiets &&
                                allDiets.map((diet) => (
                                    <option
                                        key={diet.name}
                                        value={diet.name}
                                    >
                                        {diet.name}
                                    </option>
                                ))}
                        </select>
                        {/* <div> */}
                        {/* <ion-list>
                                <ion-item>
                                    <ion-select
                                    
                                        placeholder="Select Diets Types"
                                        multiple="true"
                                        name="diets"
                                        onChange={handleMultiSelectChange}>
                                            {/* {allDiets &&
                                                allDiets.map((diet) => ( */}
                        {/* <ion-select-option value="'Gluten Free'">'Gluten Free'</ion-select-option>
                                                    <ion-select-option value="Dairy Free"> Dairy Free</ion-select-option>
                                                    <ion-select-option value="Ketogenic"> Ketogenic</ion-select-option>
                                                    <ion-select-option value="Vegetarian"> Vegetarian</ion-select-option>
                                                    <ion-select-option value="Lacto Ovo Vegetarian"> Lacto Ovo Vegetarian</ion-select-option>
                                                    <ion-select-option value="Vegan"> Vegan</ion-select-option>
                                                    <ion-select-option value="Pescatarian">Pescatarian</ion-select-option>
                                                    <ion-select-option value="Paleo"> Paleo</ion-select-option>
                                                    <ion-select-option value="Primal"> Primal</ion-select-option>
                                                    <ion-select-option value="FODMAPn">FODMAP Vegetarian</ion-select-option>
                                                    <ion-select-option value="Whole 30"> Whole 30</ion-select-option> */}
                        {/* ))} */}
                        {/* </ion-select>
                                </ion-item>
                            </ion-list> */}
                        {/* </div> */}

                        <div className={styles.danger}>
                            {dietsError && <p>{dietsError}</p>}
                        </div>

                        <div className={styles.buttons}>
                            <button type="submit" className={styles.button}
                                onClick={handleOnSubmit}>Enviar</button>

                            <button className={styles.button} onClick={handleBackSubmit}>Cancelar</button>

                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

