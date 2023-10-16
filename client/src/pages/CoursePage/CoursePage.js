import { useParams } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
/* import array from "../../storage/course.json"; */
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from "./style.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CoursePage() {
  const { id } = useParams();
  const [element, setElement] = useState({});
  const [lessons, setLessons] = useState([]);
  /*   useEffect(() => {
    getCourseDescription();
    getCourseLessons();
    console.log(lessons);
  }, [id]); */
  useMemo(async () => {
    const data = await axios.get(`http://localhost:3001/course/${id}`);
    console.log(data.data[0]);
    setElement(data.data[0]);
    /* ex-getCourseDescription(); */
    const lessonData = await axios.get(`http://localhost:3001/lesson/${id}`);
    console.log(lessonData.data);
    setLessons(lessonData.data);
    /* ex-getCourseLessons(); */
  }, [id]);

  return (
    <>
      <Header></Header>
      <div className={style.container}>
        <div className={style.course}>
          <div className={style.flex}>
            <div className={style.img}></div>
            <div className={style.info}>
              <h2 className={style.courseName}>{element.course}</h2>
              <p>{element.description}</p>
            </div>
          </div>

          <div className={style.btnGo}>Go to course</div>
        </div>

        <div className={style.lesson}>
          <h2>LESSONS</h2>
          <div>
            {lessons.map((lesson, index) => {
              return (
                <div className={style.containerLesson}>
                  <div key={index} className={style.lessonElement}>
                    <Link to={`#`}>
                      {index + 1}.{lesson.title}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
