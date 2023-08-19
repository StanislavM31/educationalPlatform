import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from "./style.module.css";
import Input from "../../components/Input/Input"
function RegPage() {

  const arr = ["name", "surname", "email", "password"];
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <div className={style.signUpinfo}>
          <h1>Sign Up</h1>
          <Input arr = {arr}/>
          <div className={style.signUpBtn}>Sign Up</div>
        </div>

        <div className={style.signUpImg}></div>
      </div>

      <Footer />
    </div>
  );
}

export default RegPage;
