import React, { useState } from "react";

function Calculator() {
  const [monthlyPayments, setMonthlyPayments] = useState(0);
  const [totalPayments, setTotalPayments] = useState(0);
  const [interestPaid, setInterestPaid] = useState(0);
  const [loan, setLoan] = useState(0);
  const [years, setYears] = useState(0);
  const [interest, setInterest] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    calculations();
  }

  function calculations() {
    const r = interest / 100 / 12;
    const principal = loan;
    const months = years * 12;
    const numerator = principal * r * (1 + r) ** months;
    const denominator = (1 + r) ** months - 1;
    let monthlyPayments = numerator / denominator;
    let totalPayments = monthlyPayments * months;
    let interestPaid = totalPayments - principal;
    // const numbers = [monthlyPayments, totalPayments, interestPaid];
    // for (let num of numbers) {
    //   const str = num.toPrecision(2);
    //   console.log(str);
    //   let idx = str.length - 1;
    //   let tempArr = [];
    //   while (idx > -1) {
    //     tempArr.push(str[idx]);
    //     if (str[idx] === ".") {
    //       idx--;
    //       let counter = 0;
    //       while (idx > -1) {
    //         counter++;
    //         tempArr.push(str[idx]);
    //         if (counter === 3) {
    //           tempArr.push(",");
    //           counter = 0;
    //         }
    //         idx--;
    //       }
    //     }
    //     idx--;
    //   }
    //   console.log(tempArr);
    //   num = tempArr.reverse().join("");
    //   console.log(num);
    // }

    setMonthlyPayments(monthlyPayments.toFixed(2));
    setTotalPayments(totalPayments.toFixed(2));
    setInterestPaid(interestPaid.toFixed(2));
  }

  return (
    <div id="calculator">
      <form onSubmit={handleSubmit}>
        <h3>Loan Amount</h3>
        <input
          type="text"
          onChange={(event) => setLoan(event.target.value)}
          placeholder="e.g. 10000"
          required
        />
        <h3>Years</h3>
        <input
          type="text"
          onChange={(event) => setYears(event.target.value)}
          placeholder="e.g. 30"
          required
        />
        <h3>Interest Rate</h3>
        <input
          type="text"
          onChange={(event) => setInterest(event.target.value)}
          placeholder="e.g. 5"
          required
        />
        <br />
        <br />
        <input type="submit" />
      </form>
      <div id="result">
        <h3>Monthly Payments</h3>
        <h4>
          The monthly payment is $
          {!monthlyPayments && !totalPayments && !interestPaid
            ? "..."
            : monthlyPayments}
        </h4>
        <h4>
          The total payment is $
          {!monthlyPayments && !totalPayments && !interestPaid
            ? "..."
            : totalPayments}
        </h4>
        <h4>
          The total interest paid is $
          {!monthlyPayments && !totalPayments && !interestPaid
            ? "..."
            : interestPaid}
        </h4>
      </div>
    </div>
  );
}

/*
monthly payments input should receive data from form on submit
on submit, send information to input
*/

export default Calculator;
