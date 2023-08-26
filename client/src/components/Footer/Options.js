export default function Options(obj) {
  return (
    <>
      {obj.data.map((el, index) => (<p key ={index}>{el}</p>)
      )}
    </>
  );
}
