import style from "./style.module.css";

function Preview() {
  return (
    <div className={style.wrapper}>
      <div className={style.info}>
        <p className={style.ecourse}>E-COURSE PLATFORM</p>
        <h1>Learning and teaching online, made easy.</h1>
        <p className={style.text}>Any subject, in any language, on any device, for all ages!</p>
        <div className={style.btnAbout}>About platform</div>
        <div className={style.statistic}>
            <div>
                <div className={style.thunder}></div>
                <div>600<span>+</span></div>
            </div>
            <p>students</p>
        </div>
      </div>
      <div className={style.image}></div>

    </div>
  );
}

export default Preview;
