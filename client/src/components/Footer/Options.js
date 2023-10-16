import {Link} from "react-router-dom";

export default function Options(obj) {
  return (
    <>
      {obj.data.map((el, index) => (
                  <Link to={"/*"}><p key ={index}>{el}</p></Link>
      )
      )}
    </>
  );
}
