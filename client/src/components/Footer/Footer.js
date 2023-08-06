import style from "./style.module.css";

function Footer() {
  return (
    <div className={style.wrapper}>
      <div className={style.options}>
        <div>
          <p>Home</p>
          <p>Textbook</p>
          <p>Statistics</p>
          <p>Sprint</p>
        </div>

        <div>
          <p>Alex</p>
          <p>Gabriel</p>
          <p>Marcus</p>
        </div>
      </div>

      <div className={style.line}></div>

      <div className={style.network}>
        <div className={style.icons}>
          <div className={style.icon_1}></div>
          <div className={style.icon_2}></div>
          <div className={style.icon_3}></div>
        </div>

        <p>©2021 Hschool. Project for Hschool.</p>
      </div>
    </div>
  );
}

export default Footer;
