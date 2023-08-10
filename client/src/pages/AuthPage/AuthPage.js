import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "./style.module.css";

function AuthPage() {
  return (
    <div>
      <Header />

      <div className={style.login}>
        <div className={style.loginInfo}>
          <h1>Login</h1>

          <div className={style.loginInputs}>
            <input type="text" placeholder="text..." />
          </div>
          <div>
            <input type="text" placeholder="text..." />
          </div>

          <div className={style.loginUpBtn}>Login</div>
        </div>

        <div className={style.loginImg}></div>
      </div>
      <Footer />
    </div>
  );
}
export default AuthPage;
