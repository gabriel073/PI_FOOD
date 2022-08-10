import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import frutasHome from "../../imgs/frutasHome.mp4";


function NavBar() {
    return (
        <div className={styles.pagInicial}>
            <div className={styles.overlay}>
            <div className={styles.absolute}>          
            <h2 ><Link className={styles.link} to="/recipes">Home</Link></h2>            
            </div>
                <video  muted autoPlay loop >
                    <source src={frutasHome} type={"video/mp4"} />
                </video>
                </div>
        </div>
    )
}
export default NavBar;