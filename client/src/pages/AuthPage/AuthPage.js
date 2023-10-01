import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "./style.module.css";
import Input from "../../components/Input/Input"
import axios from "axios";
import { MyContext } from "../../Context/Context";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";


function AuthPage() {
  const{logIn} = useContext(MyContext)
  const navigate = useNavigate()

  const arr = ["email", "pwd"];
  const [value, setValue] = useState({email:"", pwd:""});
  async function sendDataAuthorization(){
    const result = await axios.post('http://localhost:3001/api/auth', value, {
      withCredentials: true,
    });


    if(result.data.length) {
      console.log('Вы зарегистрировались успешно');
      logIn();
      navigate("/");
    };
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
