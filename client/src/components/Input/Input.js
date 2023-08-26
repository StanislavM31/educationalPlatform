

export default function Input({arr, value, setValue}){
function setNewInputValue(event){
    setValue({...value, [event.target.name]: event.target.value})
}
    const result = arr.map((el, index)=>
        <div key = {index}>
            <input type="text" name={el} onChange={setNewInputValue} placeholder={el} />
        </div>
    )
    return (
        <div>{result}</div>
    )
}