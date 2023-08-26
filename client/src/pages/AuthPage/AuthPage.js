import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "./style.module.css";
import Input from "../../components/Input/Input"
import { useState } from "react";

function AuthPage() {
  const arr = ["email", "pwd"];
  const [value, setValue] = useState({email:"", pwd:""});
  function show(){
    console.log(value);
  }
  return (
    <div>
      <Header />

      <div className={style.login}>
        <div className={style.loginInfo}>
          <h1>Login</h1>
          <Input arr={arr} value={value} setValue={setValue}/>
          <div className={style.loginUpBtn} onClick={show}>Login</div>
        </div>

        <div className={style.loginImg}></div>
      </div>

      <Footer />
    </div>
  );
}
export default AuthPage;
