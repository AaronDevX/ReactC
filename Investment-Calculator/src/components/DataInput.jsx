export default function DataInput({nameInput, name, saveData}) {
    function extractData(e){
        saveData(name, parseFloat(e.target.value));
    }
    return (
        <div>
            <label htmlFor={nameInput}>{nameInput}</label>
            <input onChange={extractData} name={nameInput} type={name === "expectedReturn" ? "float" : "number"}/>
        </div>
    )
}