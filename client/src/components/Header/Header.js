import { Link } from "react-router-dom";
import style from "./style.module.css";

function Header() {
  return (
    <div className={style.wrapper}>
      <h1>
        <Link to={"/"}>Hschool</Link>
      </h1>
      <div className={style.btns}>
        <div className={style.loginBtn}>Login →</div>
        <div className={style.regBtn}>
          <Link to={"/reg"}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
