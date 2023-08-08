import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from "./style.module.css";
function RegPage() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <div className={style.signUpinfo}>
          <h1>Sign Up</h1>

          <div className="signUpinfoInputs">
            <input type="text" placeholder="text..." />
          </div>
          <div>
            <input type="text" placeholder="text..." />
          </div>
          <div>
            <input type="text" placeholder="text..." />
          </div>
          <div>
            <input type="text" placeholder="text..." />
          </div>
          <div className={style.signUpBtn}>Sign Up</div>
        </div>
        
        <div className={style.signUpImg}></div>
      </div>

      <Footer />
    </div>
  );
}

export default RegPage;
