import { Link } from "react-router-dom";
import styleLinkHome from "../LinkHome/linkHome.module.css";
import casa from "../../imgs/casa.png";




function LinkHome() {
  return (
    <div className={styleLinkHome.conteinerGral}>
      <div className={styleLinkHome.conteinerLink}>
        <Link className={styleLinkHome.link} to="/">
          <img className={styleLinkHome.home} src={casa} alt={"IrAhome"} />
          <div className={styleLinkHome.linkTxt}><p>Ir a Home</p></div>
        </Link>
      </div>
    </div>
  );
}

export default LinkHome;