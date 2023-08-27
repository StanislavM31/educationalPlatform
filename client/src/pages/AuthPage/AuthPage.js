import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "./style.module.css";
import Input from "../../components/Input/Input"
import { useState } from "react";
import axios from "axios";

function AuthPage() {
  const arr = ["email", "pwd"];
  const [value, setValue] = useState({email:"", pwd:""});
  async function sendDataAuthorization(){
    const result = await axios.post('http://localhost:3001/api/auth', value);
    console.log(result);
  }
  return (
    <div>
      <Header />

      <div className={style.login}>
        <div className={style.loginInfo}>
          <h1>Login</h1>
          <Input arr={arr} value={value} setValue={setValue}/>
          <div className={style.loginUpBtn} onClick={sendDataAuthorization}>Login</div>
        </div>

        <div className={style.loginImg}></div>
      </div>

      <Footer />
    </div>
  );
}
export default AuthPage;
