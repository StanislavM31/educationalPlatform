

export default function Input(obj){
    
    const result = obj.arr.map((el)=>
        <div>
            <input type="text" placeholder={el}/>
        </div>
    )
    return (
        <div>{result}</div>
    )
}