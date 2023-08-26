import style from "./style.module.css";
import Options from "./Options"
import Icons from "./Icons";

function Footer() {

  return (
    <div className={style.wrapper}>
      <div className={style.options}>
        <div>
          <Options data={["home", 'Textbook', "Statistics", "Sprint"]}/>
        </div>

        <div>
          <Options data={["Alex", "Gabriel", "Marcus"]}/>
        </div>
      </div>

      <div className={style.line}></div>

      <div className={style.network}>
        <div className={style.icons}>
          <Icons data={["icon_1", "icon_2", "icon_3"]}/>
        </div>

        <p>©2021 Hschool. Project for Hschool.</p>
      </div>
    </div>
  );
}

export default Footer;
