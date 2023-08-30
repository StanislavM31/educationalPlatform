import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from "./style.module.css";
import { Pagination } from "@mui/material";
import array from "./array";
import { useState, useEffect } from "react";

function StudentPage() {
  const [elements, setElements] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const elementsPerPage = 4;

  useEffect(()=> setElements(array), [currentPage])

  //Логика расчета элементов для отображения
  const indexLastElement = currentPage * elementsPerPage; //1*3, 2*3, 3*3
  const indexFirstElement = indexLastElement - elementsPerPage;//3-3, 6-3, 9-3
  const currentElements = elements.slice(indexFirstElement, indexLastElement);//slice(0,3); 3,6; 6,9


  function updateData(event, page){
    console.log(page);
    setCurrentPage(page)
  }

  return (
    <>
      <Header />
      <div className={style.wraper}>
        <div className={style.container}>
          <div className={style.image}></div>
        </div>
        <div className={style.list}>
            {
                currentElements.map((el, index)=>{
                    return (
                        <div key={index} className={style.courseCart} >
                            <div className={style.courseImg}></div>
                            <div className={style.courseOuter}>
                                <h2>{el.name}</h2>
                                <p>{el.text}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </div>
      <div>
      <Pagination value={currentPage} onChange={updateData} count={Math.ceil(array.length / elementsPerPage)} color="primary" hideNextButton={true} />
      </div>
      <Footer />
    </>
  );
}

export default StudentPage;