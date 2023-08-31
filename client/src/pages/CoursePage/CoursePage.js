import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import array from "../../storage/course.json";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from "./style.module.css";

export default function CoursePage() {
  const { id } = useParams();
  const [element, setElement] = useState({});
  useEffect(() => {
    const curElement = array.filter((el) => el.id === id);
    setElement(curElement[0]);
  }, [id]);
  return (
    <>
      <Header></Header>
      <div className={style.container}>
        <div className={style.course}>
          <div className={style.flex}>
            <div className={style.img}></div>
            <div className={style.info}>
              <h2>{element.name}</h2>
              <p>{element.text}</p>
            </div>
          </div>

          <div className={style.btn}>Go to course</div>
        </div>

        <div className={style.lesson}>
            <h2>LESSON</h2>
          <ul>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
