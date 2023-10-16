import Header from "../../components/Header/Header";
import style from "./style.module.css";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <Header></Header>
      <div className={style.container}>
        <div className={style.buddy}>
          <p className={style.error}>Error 404</p>
          <h1>Hey Buddy</h1>
          <p>We can't seem to find the page you are looking for.</p>
          <Link to={"/"}>
            <div className={style.goHomebtn}>go home</div>
          </Link>
        </div>
        <div className={style.ghost}></div>
      </div>
    </>
  );
}
