import style from "./style.module.css";

function Preview() {
  return (
    <div>
      <div className={style.preview}>
        <div className={style.info}>
          <p className={style.ecourse}>E-COURSE PLATFORM</p>
          <h1>Learning and teaching online, made easy.</h1>
          <p className={style.text}>
            Any subject, in any language, on any device, for all ages!
          </p>
          <div className={style.btnAbout}>About platform</div>
          <div className={style.statistic}>
            <div>
              <div className={style.thunder}></div>
              <div>
                600<span>+</span>
              </div>
            </div>
            <p>students</p>
          </div>
        </div>
        <div className={style.image}></div>
      </div>

      <div className={style.wrapperBCG}>
        <div className={style.language}>
          <div className={style.imgLanguages}></div>
          <div className={style.information}>
            <h1>Learn a language in a playful way</h1>
            <p>Make learning programming languages more fun with mini-games</p>
            <div className={style.btnImgs}>
              <div className={style.imgSprints}></div>
              <div className={style.imgTasks}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.knowledge}>
        <div className={style.knowledgeText}>
          <h1>Increase your knowledge</h1>
          <p>Traditional and new effective approaches to learning languages</p>
        <div className={style.buttonKnlg}>Textbook →</div>
        </div>
        <div className={style.knowledgeTextImg}></div>
      </div>
    </div>
  );
}

export default Preview;
