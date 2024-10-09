import {formatter} from "../util/investment.js";

export default function Results({data}){
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Investment Capital</th>
                </tr>
            </thead>
            <tbody>
            {data.map(yearObj => (
                <tr key={parseInt(yearObj.year)}>
                    <td>{parseInt(yearObj.year)}</td>
                    <td>{formatter.format(parseInt(yearObj.valueEndOfYear))}</td>
                    <td>{formatter.format(parseInt(yearObj.interest))}</td>
                    <td>{formatter.format(parseInt(yearObj.totalInterest))}</td>
                    <td>{formatter.format(parseInt(yearObj.investmentCapital))}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}