import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from "./style.module.css";
import { Pagination } from "@mui/material";
/* import array from "../../storage/course.json"; */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function StudentPage() {
  const [elements, setElements] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const elementsPerPage = 3;

  useEffect(() => {
    sendData()
  }, [currentPage]);

  //Логика расчета элементов для отображения
  const indexLastElement = currentPage * elementsPerPage; //1*3, 2*3, 3*3
  const indexFirstElement = indexLastElement - elementsPerPage; //3-3, 6-3, 9-3
  const currentElements = elements.slice(indexFirstElement, indexLastElement); //slice(0,3); 3,6; 6,9

  function updateData(event, page) {
    console.log(page);
    setCurrentPage(page);
  }

  async function sendData(){
    const data = await axios.get(`http://localhost:3001/course`);
    console.log(data.data);
    setElements(data.data)
    return data.data;
  }
  return (
    <>
      <Header />
      <div className={style.wraper}>
        <div className={style.container}>
          <div className={style.image}></div>
        </div>
        <div className={style.list}>
          {currentElements.map((el, index) => {
            return (
              <div key={index}>
              <Link to={`/course/${el.id}`}>
                <div  className={style.courseCart}>
                  <div className={style.courseImg}></div>
                  <div className={style.courseOuter}>
                    <h2 className={style.nameOfCourse}>{el.course}</h2>
                    <p className={style.descriptionOfCourse}>{el.description}</p>
                  </div>
                </div>
              </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <Pagination
          value={currentPage}
          onChange={updateData}
          count={Math.ceil(elements.length / elementsPerPage)}
          color="primary"
          hideNextButton={false}
        />
      </div>
      <Footer />
    </>
  );
}

export default StudentPage;
