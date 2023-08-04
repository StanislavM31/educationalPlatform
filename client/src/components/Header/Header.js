import style from "./style.module.css";

function Header() {
  return (
    <div className = {style.wrapper}>
      <h1>Hschool</h1>
      <div className = {style.btns}>
        <div className= {style.loginBtn}>Login →</div>
        <div className= {style.regBtn}>Sign Up</div>
      </div>
    </div>
  );
}

export default Header;