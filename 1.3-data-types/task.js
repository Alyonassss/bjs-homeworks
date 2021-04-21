"use strict"
function calculateTotalMortgage(percent, contribution, amount, date) {

  if (isNaN(percent) || percent <= 0) {
    return `Параметр Процентная ставка содержит неправильное значение ${percent}.`;
  }

  if (isNaN(contribution) || contribution < 0 || contribution > amount) {
    return `Параметр Начальный взнос содержит неправильное значение ${contribution}.`;
  }

  if (isNaN(amount) || amount <= 0) {
    return `Параметр Общая стоимость содержит неправильное значение ${amount}.`;
  }

  if (isNaN(Date.parse(date))) {
    return `Параметр Срок ипотеки содержит неправильное значение ${date}.`;
  }

  let refundAmount = amount - contribution;
  let startDate = new Date;
  let numberOfMonths = Math.round((date - startDate) / 2628000000);

  if (numberOfMonths < 1) {
    return `Параметр Срок ипотеки содержит неправильное значение ${numberOfMonths}.`;
  }

  let monthlyInterestRate = percent / 100 / 12;
  let monthlyPayment = refundAmount * (monthlyInterestRate + monthlyInterestRate / (((1 + monthlyInterestRate) ** numberOfMonths) - 1));
  let totalAmount = +(monthlyPayment * numberOfMonths).toFixed(2);
  console.log(totalAmount);
  return totalAmount;

}


function getGreeting(name) {

    if ((!name) || (name == typeof (undefined)) || (name === 'null') || (name == `''`)) {
        name = 'Аноним';
    }

    return `Привет, мир! Меня зовут ${name}`;

}