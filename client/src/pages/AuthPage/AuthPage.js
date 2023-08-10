import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "./style.module.css";

function AuthPage() {
  const arr = ["email", "password"];
  const result = arr.map((el) => (
    <div>
      <input type="text" placeholder={el} />
    </div>
  ));
  return (
    <div>
      <Header />

      <div className={style.login}>
        <div className={style.loginInfo}>
          <h1>Login</h1>
          {result}
          <div className={style.loginUpBtn}>Login</div>
        </div>

        <div className={style.loginImg}></div>
      </div>

      <Footer />
    </div>
  );
}
export default AuthPage;
