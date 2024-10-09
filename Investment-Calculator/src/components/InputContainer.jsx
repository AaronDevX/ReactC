import DataInput from "./DataInput.jsx";

export default function InputContainer({fn}){
    return (
        <section id="user-input">
            <div className="input-group">
                <DataInput saveData={fn} name="initialInvestment" nameInput="initial investment"/>
                <DataInput saveData={fn} name="annualInvestment" nameInput="anual investment"/>
            </div>
            <div className="input-group">
                <DataInput saveData={fn} name="expectedReturn" nameInput="expected return"/>
                <DataInput saveData={fn} name="duration" nameInput="duration"/>
            </div>
        </section>
    )
}