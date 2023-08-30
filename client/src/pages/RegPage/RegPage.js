import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from "./style.module.css";
import Input from "../../components/Input/Input"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegPage() {
  const navigate = useNavigate();
  const [ value, setValue] = useState(
    {name:"", surname:"", email:"", pwd:""});

  const arr = ["name", "surname", "email", "pwd"];
  async function sendDataRegistration(){
    const result = await axios.post('http://localhost:3001/api/registration', value)
    if(result.data.length) {
      console.log('Вы зарегистрировались успешно');
      navigate("/student");
    };
  }
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <div className={style.signUpinfo}>
          <h1>Sign Up</h1>
          <Input arr = {arr} value={value} setValue={setValue}/>
          <div className={style.signUpBtn} onClick={sendDataRegistration}>Sign Up</div>
        </div>

        <div className={style.signUpImg}></div>
      </div>

      <Footer />
    </div>
  );
}

export default RegPage;
