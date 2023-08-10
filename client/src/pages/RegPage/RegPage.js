import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from "./style.module.css";
function RegPage() {
  const arrayRegPage = ["name", "surname", "email", "password"];
  const result = arrayRegPage.map((el) => (
    <div>
      <input type="text" placeholder={el} />
    </div>
  ));
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <div className={style.signUpinfo}>
          <h1>Sign Up</h1>
          {result}
          <div className={style.signUpBtn}>Sign Up</div>
        </div>

        <div className={style.signUpImg}></div>
      </div>

      <Footer />
    </div>
  );
}

export default RegPage;
