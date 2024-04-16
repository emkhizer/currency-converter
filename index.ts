#!/usr/bin/env node

import inquirer from "inquirer";

const Currency: any = {
  USD: 1,
  EUR: 0.94,
  PKR: 278,
  AFN: 71,
  AED: 3.67,
  TRY: 32.41,
  KWD: 0.31,
  IRR: 42075,
  CNY: 7.24,
  INR: 83.44,
};

let user_answer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter from Currency",
    type: "list",
    choices: [
      "USD",
      "EUR",
      "PKR",
      "AFN",
      "AED",
      "TRY",
      "KWD",
      "IRY",
      "CNY",
      "INR",
    ],
  },
  {
    name: "to",
    message: "Enter to Currency",
    type: "list",
    choices: [
      "USD",
      "EUR",
      "PKR",
      "AFN",
      "AED",
      "TRY",
      "KWD",
      "IRY",
      "CNY",
      "INR",
    ],
  },
  {
    name: "amount",
    message: "Enter your Amount",
    type: "number",
    choices: [
      "USD",
      "EUR",
      "PKR",
      "AFN",
      "AED",
      "TRY",
      "KWD",
      "IRY",
      "CNY",
      "INR",
    ],
  },
]);
//console.log(user_answer)
//let fromAmount = user_answer.from
let fromAmount = Currency[user_answer.from]; //exchange rate
let toAmount = Currency[user_answer.to]; //exchange rate
let amount = user_answer.amount; //usd base currency
let baseAmount = amount / fromAmount; // usd base currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
console.log(fromAmount);
console.log(toAmount);
console.log(amount);

console.log(`${convertedAmount.toFixed(1)} ${user_answer.to}`);