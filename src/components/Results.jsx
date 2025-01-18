import React from 'react'
import { calculateInvestmentResults, formatter } from '../util/investment'

const Results = ({input}) => {
    const resultData = calculateInvestmentResults(input);
    // console.log(resultData)
    let totalInterest = 0;
  return (
    <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {
                resultData.map((yearData)=>{
                    totalInterest += yearData.interest;
                    const investedCapital = input.initialInvestment + input.annualInvestment * yearData.year;
                    return(
                        <tr>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(investedCapital)}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
  )
}

export default Results