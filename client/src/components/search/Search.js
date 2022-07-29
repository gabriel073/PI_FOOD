import React, { useState } from "react";

import styles from "./search.module.css";
import { useSelector, useDispatch } from "react-redux";
import { searchRecipe } from "../../actions";

export default function Search() {

    const [search, setSearch] = useState("");
    const { filteredRecipes } = useSelector(state => state);
    const dispatch = useDispatch();


    const searcher = (e) => {
        setSearch(e.target.value);
        dispatch(searchRecipe(search));
    }
    
    return (        
         
        <div className={styles.containerSearch}>
                <input type="text"
                    value={search}
                    className={styles.search}
                    placeholder="Search..."
                    onChange={searcher} />
            </div>
     );
}

