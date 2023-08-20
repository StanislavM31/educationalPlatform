

export default function Input(obj){

    const result = obj.arr.map((el, index)=>
        <div key = {index}>
            <input type="text" placeholder={el}/>
        </div>
    )
    return (
        <div>{result}</div>
    )
}