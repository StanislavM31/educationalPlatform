import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "./style.module.css";
import Input from "../../components/Input/Input"

function AuthPage() {
  const arr = ["email", "password"];

  return (
    <div>
      <Header />

      <div className={style.login}>
        <div className={style.loginInfo}>
          <h1>Login</h1>
          <Input arr={arr}/>
          <div className={style.loginUpBtn}>Login</div>
        </div>

        <div className={style.loginImg}></div>
      </div>

      <Footer />
    </div>
  );
}
export default AuthPage;
