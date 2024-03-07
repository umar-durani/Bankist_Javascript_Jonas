"use strict";

/*---------------- Main file with all necessary variables and helper functions ----------------*/

/*-------------------------------- Data ----------------------------------*/

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2021-04-14T23:36:17.929Z",
    "2021-04-20T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2021-04-18T18:49:59.371Z",
    "2021-04-16T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    "2010-06-25T14:19:59.371Z",
    "2011-01-01T15:15:43.035Z",
    "2016-07-26T12:01:20.894Z",
    "2018-11-30T09:08:16.867Z",
    "2019-02-25T06:04:23.907Z",
    "2020-04-10T14:43:26.374Z",
    "2021-01-05T04:18:46.235Z",
    "2021-02-25T16:33:36.386Z",
  ],
  currency: "DKK",
  locale: "da-DK",
};

const account4 = {
  owner: "Salah Mohammad",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    "2015-04-01T10:17:24.185Z",
    "2016-05-08T14:11:59.604Z",
    "2017-07-26T17:01:17.194Z",
    "2019-12-23T07:42:02.383Z",
    "2021-01-28T09:15:04.904Z",
  ],
  currency: "SYP",
  locale: "syr-SY", // for english
  // locale: 'ar-SY'        // for arabic
};

const accounts = [account1, account2, account3, account4];

/*------------------------------- Elements -----------------------------*/

// labels
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

// container
const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

// buttons
const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

// user inputs
const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// others
const logo = document.querySelector(".logo");

// console.log(containerMovements.innerHTML);

/*---------------------------- functionalities -----------------------------*/

// const createUserNames = (accs) => {
//   accs.forEach(
//     (acc) =>
//       (acc.userName = acc.owner
//         .toLowerCase()
//         .split(" ")
//         .map((name) => name[0])
//         .join(""))
//   );
// };
// createUserNames(accounts);

// /*----------------- Helper Methods & Variables ---------------*/

// let currentAccount, timer;

// const dateTimeOptions = {
//   day: "2-digit",
//   month: "2-digit",
//   year: "numeric",
//   hour: "2-digit",
//   minute: "2-digit",
// };

// const assignAccount = (account) => {
//   // needed only for LoginRequest.js. As we can't reassign any variable there
//   currentAccount = account;
// };

// const assignTimer = () => {
//   // As we can't reassign any variable at other files
//   timer = LogoutTimer();
// };

// const formatTime = (time) => {
//   // const hour = `${now.getHours()}`.padStart(2, '0');
//   // const minute = `${now.getMinutes()}`.padStart(2, '0');
//   // const second = `${now.getSeconds()}`.padStart(2, '0');
//   // return `${hour}:${minute}:${second}`;
//   return new Intl.DateTimeFormat(currentAccount.locale, {
//     hour: dateTimeOptions.hour,
//     minute: dateTimeOptions.minute,
//   }).format(time); // using Intl API
// };

// const formatDateTime = (dateTime) => {
//   // const day = `${now.getDate()}`.padStart(2, '0');
//   // const month = `${now.getMonth() + 1}`.padStart(2, '0');
//   // const year = now.getFullYear();
//   // return `${day}/${month}/${year}, ${formatTime(now)}`;
//   return new Intl.DateTimeFormat(currentAccount.locale, dateTimeOptions).format(
//     dateTime
//   ); // using Intl API
// };

// const formatMovementDateTime = (date) => {
//   const calcDaysPassed = (date1, date2) =>
//     Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
//   const dayDiff = calcDaysPassed(date, new Date());

//   if (dayDiff === 0) return `today, ${formatTime(date)}`;
//   else if (dayDiff === 1) return `yesterday, ${formatTime(date)}`;
//   else if (dayDiff <= 7) return `${dayDiff} days ago, ${formatTime(date)}`;
//   else return formatDateTime(date);
// };

// const formatCurrency = (money) => {
//   const currencyOptions = {
//     style: "currency",
//     currency: currentAccount.currency,
//   };
//   return new Intl.NumberFormat(currentAccount.locale, currencyOptions).format(
//     money
//   );
// };

// const convertCurrency = (from, to, currency) => {
//   const conversionRates = {
//     USD: 1,
//     EUR: 0.83, // 1 USD === 0.83 EUR
//     DKK: 6.18,
//     SYP: 2860,
//   };
//   return currency * (conversionRates[to] / conversionRates[from]);
// };

// /*------------------------ Main Functions ----------------------------*/

// const calcGrossBalance = (account) => {
//   account.balance = account.movements.reduce(
//     (sum, movement) => sum + movement,
//     0
//   );
//   labelBalance.textContent = formatCurrency(account.balance); // alternative -> labelBalance.textContent = `${account.balance.toFixed(2)}€`;
// };

// const displayMovements = (account, sort = false) => {
//   containerMovements.innerHTML = "";
//   const newMovements =
//     sort === true
//       ? account.movements.slice().sort((a, b) => a - b)
//       : account.movements;

//   newMovements.forEach((amount, i) => {
//     const type = amount > 0 ? "deposit" : "withdrawal";
//     const date = formatMovementDateTime(new Date(account.movementsDates[i]));
//     const currency = formatCurrency(amount);

//     const htmlElement = `
//     <div class='movements__row'>
//       <div class='movements__type movements__type--${type}'>${
//       i + 1
//     } ${type}</div>
//       <div class='movements__date'>${date}</div>
//       <div class='movements__value'>${currency}</div>
//     </div>`;

//     containerMovements.insertAdjacentHTML("afterbegin", htmlElement);
//   });
// };

// const calcSummary = (account) => {
//   // const deposits = account.movements
//   //   .filter(movement => movement > 0)
//   //   .reduce((sum, movement) => sum + movement);
//   // labelSumIn.textContent = formatCurrency(deposits);
//   //
//   // const withdrawals = account.movements
//   //   .filter(movement => movement < 0)
//   //   .reduce((sum, movement) => sum + movement);
//   // labelSumOut.textContent = formatCurrency(Math.abs(withdrawals));
//   //
//   // const totalInterest = account.movements
//   //   .filter(movement => movement > 0)
//   //   .map(movement => (movement * account.interestRate) / 100)
//   //   .filter((interest) => interest >= 1)
//   //   .reduce((sum, amount) => sum + amount, 0);
//   // labelSumInterest.textContent = formatCurrency(totalInterest);

//   // alternative way (very short)
//   const obj = account.movements.reduce(
//     (sumObj, cur) => {
//       sumObj[cur > 0 ? "deposits" : "withdrawals"] += cur;
//       if (cur > 0) {
//         let interest = (cur * account.interestRate) / 100;
//         interest = interest >= 1 ? interest : 0;
//         sumObj["totalInterest"] += interest;
//       }
//       return sumObj;
//     },
//     { deposits: 0, withdrawals: 0, totalInterest: 0 }
//   );

//   labelSumIn.textContent = formatCurrency(obj.deposits);
//   labelSumOut.textContent = formatCurrency(Math.abs(obj.withdrawals));
//   labelSumInterest.textContent = formatCurrency(obj.totalInterest);
// };

// const updateDisplay = (account) => {
//   labelDate.textContent = formatDateTime(new Date()); // or labelDate.textContent = new Date().toLocaleString();
//   displayMovements(account);
//   calcGrossBalance(account);
//   calcSummary(account);
// };

// const LogoutTimer = () => {
//   let start = 120;

//   const timerFunc = () => {
//     const minute = String(Math.trunc(start / 60)).padStart(2, "0");
//     const second = String(Math.trunc(start % 60)).padStart(2, "0");

//     labelTimer.textContent = `${minute}:${second}`;

//     if (start === 0) {
//       clearInterval(timer);
//       labelWelcome.textContent = "Log in to get started";
//       containerApp.style.opacity = 0;
//     }
//     start--;
//   };

//   timerFunc();
//   const timer = setInterval(timerFunc, 1000);
//   return timer;
// };

// /*------------------------------ Event Handlers ----------------------------*/

// // Login: LoginRequest.js
// // Transfer: TransferRequest.js
// // Loan: LoanRequest.js
// // Sort All Transactions: TransactionSorter.js
// // Close/Delete Account: CloseAccount.js
// // Optional Functions (Just For Practice) : OptionalFunctions.js

// /*------------------ Exporting for splitting up multiple files -----------------*/
// // all will be included in the respective modules as const by default

// export {
//   accounts,
//   containerApp,
//   currentAccount,
//   logo,
//   timer,
//   labelWelcome,
//   labelBalance,
//   assignAccount,
//   assignTimer,
//   btnLogin,
//   btnTransfer,
//   btnLoan,
//   btnSort,
//   btnClose,
//   inputLoginUsername,
//   inputLoginPin,
//   inputTransferTo,
//   inputTransferAmount,
//   inputLoanAmount,
//   inputCloseUsername,
//   inputClosePin,
//   convertCurrency,
//   updateDisplay,
//   displayMovements,
//   LogoutTimer,
// };

//---------------18. Bankist App Login Form----------------------
//Event Handler
let currentAccount;
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  if (currentAccount.pin === inputLoginPin.value) {
    console.log("Congratulation, Login Successfully");
  }
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //-------- Diplay UI and Messege
    labelWelcome.textContent = `Welcome Back, ${currentAccount.owner.split(
      " "
    )}`;
    containerApp.style.opacity = 100;

    //--------clear fieds------------------
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    UpdateUI(currentAccount);
  }
});

//------------19. Tranfer Amount -----------------
// btnTransfer.addEventListener("click", function (val) {
//   val.preventDefault();
//   const amount = Number(inputTransferAmount.value);
//   const recieverAcc = accounts.find(
//     (acc) => acc.username === inputTransferTo.value
//   );
//   console.log(amount, recieverAcc);
// });

btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  // console.log(amount, recieverAcc);
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    recieverAcc &&
    currentAccount.balance >= amount &&
    recieverAcc?.username !== currentAccount.username
  ) {
    // console.log("Congrat, Tranfer Valid");

    //------------Doing the transfer-----------------
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);

    //--------- UpdateUI ---------------
    UpdateUI(currentAccount);
  }
});

//----------- 20. FindIndex Method --------------
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    //------- delete Accounts ---------
    accounts.splice(index, 1);
    // =--------- Hide UI-----------
    containerApp.style.opacity = 0;
  }
  // ---------  Taking user Value --------
  inputCloseUsername.value = inputClosePin.value = "";
});

// ------7-----------

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  //---------- Sorting Functionality ------------------
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (move, i) {
    const type = move > 0 ? "Deposite" : "WithDrawal";

    const html = `
    <div class="movements">
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    }${type}</div>
      <div class="movements__date">2 days ago</div>
      <div class="movements__value">${move}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
// displayMovements(account1.movements);

// -----------8.coding challenge #1------------
const checkdogs = (dogsJulia, dogsKate) => {
  // the first dogsJulia remove index 0 and last 2 elements
  const dogsJuldiaCorrected = dogsJulia.slice();
  dogsJuldiaCorrected.splice(0, 1);
  dogsJuldiaCorrected.splice(-2);
  const dogs = dogsJuldiaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dogs number ${i + 1} and is a dog ${dog} year old`);
    } else {
      console.log(`Puppy ${i + 1} still a  puply😊 `);
    }
  });
};
checkdogs([12, 2, 3, 1, 6, 10, 2], [2, 1, 6, 12, 23]);

//10 -------Map method----------
const movements = [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300];
const eurtoUSD = 1.001;
const movementsUSD = movements.map((move) => {
  return move * eurtoUSD;
});
console.log(movements);
console.log(movementsUSD);

// -----for of loop same operation--------
const newArray = [];
for (const moves of movements) {
  newArray.push(moves * eurtoUSD);
}
console.log(newArray);

// ------Map exploration-------
const movementsDescription = movements.map((move, i, Array) => {
  if (move > 0) {
    return `Movements ${i + 1}: your Deposite ${move}`;
  } else {
    return `Movements ${i + 1}: your Withdrew ${Math.abs(move)}`;
  }
});
console.log(movementsDescription);

//--------Compute Username----------
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);
console.log(accounts);

//--------- UpdateUI-----------
const UpdateUI = (acc) => {
  //-------- Display movements -------------
  displayMovements(acc.movements);

  //-------- Display Balance ----------------
  calcDisplayBalance(acc);

  //--------Display Summary -----------------
  calcDisplaySummary(acc);
};

// --------12 Filter method--------
const deposits = account1.movements.filter(function (move) {
  return move > 0;
});
console.log(account1.movements);
console.log(deposits);

const withdrawals = account1.movements.filter(function (withdraw) {
  return withdraw < 0;
});
console.log(withdrawals);

// -----------13.Reduce method----------------
// console.log(account1.movements);
// const balance = account1.movements.reduce(function (acc, curr, i, Array) {
//   console.log(`Iteration ${i + 1}: ${acc}`);
//   return acc + curr;
// }, 0);
// console.log(balance);

console.log(account1.movements);
const balance = account1.movements.reduce(
  (acc, curr) =>
    // console.log(`Iteration ${i + 1}: ${acc}`);
    acc + curr,
  0
);
console.log(`Arrow method ${balance}`);

//----------For of loop----------
let balance2 = 0;
for (const move of movements) {
  balance2 += move;
}
console.log(`For Of loop: ${balance2}`);

// ----------Calculate balance ----------
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, move) => acc + move, 0);
  // acc.balance = balance;
  labelBalance.textContent = `${acc.balance}€`;
};
// calcDisplayBalance(account1.movements);

//-----------Calculate Summary-----------
const calcDisplaySummary = function (acc) {
  //---------In----------
  const income = acc.movements
    .filter((move) => move > 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumIn.textContent = `${Math.floor(income)}€`;
  //-------Out---------
  const IncomeOut = acc.movements
    .filter((move) => move < 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumOut.textContent = `${Math.floor(Math.abs(IncomeOut))}€`;
  //-------Interest--------
  const InterestIncome = acc.movements
    .filter((move) => move > 0)
    .map((deposite) => (deposite * acc.interestRate) / 100)
    .filter((element, i, arr) => {
      console.log(arr);
      return element >= 1;
    })
    .reduce((acc, move) => acc + move, 0);
  labelSumInterest.textContent = `${Math.floor(Math.abs(InterestIncome))}€`;
};
// calcDisplaySummary(account1.movements);

//------------Max Value-----------------
const Max = movements.reduce((acc, move) => {
  if (acc > move) {
    return acc;
  } else {
    return move;
  }
});
console.log(`Max Value: ${Max}`);

//---------------- 14.Coding Challenge 02-------------------

// const dogAge1 = [1, 2, 1, 3, 5, 6, 10];
// const dogAge2 = [1, 3, 1, 5, 7, 8, 9, 10];

//-----1.Calculate the dog age--------
const CalcAverage = function (Age) {
  const HumanAge = Age.map((Age) => (Age <= 2 ? 2 * Age : 16 + Age * 4));
  const Adults = HumanAge.filter((Age) => Age >= 18);
  console.log(HumanAge);
  console.log(Adults);
  const average = Adults.reduce((acc, Age) => acc + Age / Adults.length, 0);
  return average;
};
const avg1 = CalcAverage([1, 2, 1, 3, 5, 6, 10]);
const avg2 = CalcAverage([1, 3, 1, 5, 7, 8, 9, 10]);
console.log(avg1, avg2);

//-------------16. Coding Challenge #3--------------------
const CalcAverageHumanAge = (Ages) =>
  Ages.map((Age) => (Age <= 2 ? 2 * Age : 16 + Age * 4))
    .filter((Age) => Age >= 18)
    .reduce((acc, Age, i, arr) => acc + Age / arr.length, 0);
const Arravg1 = CalcAverageHumanAge([1, 2, 1, 3, 5, 6, 10]);
const Arravg2 = CalcAverageHumanAge([1, 3, 1, 5, 7, 8, 9, 10]);
console.log(Arravg1, Arravg2);

//-------------The Magic of Chaining Method-----------------
const USD = 1.001;
const TotalDeposite = movements
  .filter((move) => move > 0)
  .map((move) => move * USD)
  .reduce((acc, move) => acc + move, 0);

console.log(`${TotalDeposite}€`);

//------------17. Find Method ----------------------
const FindMethod = accounts.find((acc) => acc.owner === "Salah Mohammad");
console.log(accounts);
console.log(FindMethod);

//---------for of loop -----------------

// --------21. Some Method -----------------
btnLoan.addEventListener("click", (ele) => {
  ele.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((move) => move >= amount * 0.1)
  ) {
    //--------- Add movement -----------
    currentAccount.movements.push(amount);

    //-------- update UI --------------
    UpdateUI(currentAccount);
  }
});

console.log(movements);
//-------- Equality --------
console.log(movements.includes(25000));

//-------- condition --------
console.log(movements.some((move) => move === 25000));

const AnyDeposite = movements.some((move) => move > 0);
console.log(AnyDeposite);

//--------------- Separate Callback ----------------
const deposit = (move) => move > 0;
console.log("separte Callback");
console.log(movements.some(deposit));
console.log(account4.movements.every(deposit));
console.log(movements.filter(deposit));

// -------------- 22. Flat & FlatMap -----------------
const MovementMap = accounts.map((move) => move.movements);
console.log(MovementMap);
const AllMovements = MovementMap.flat();
console.log(AllMovements);
const OverallBalance = AllMovements.reduce((acc, move) => acc + move);
console.log(OverallBalance);

// ------------- using chaing method --------------------
const OverallBalance2 = accounts
  .map((move) => move.movements)
  .flat()
  .reduce((acc, move) => acc + move);
console.log(OverallBalance2);

//---------------- using flatMap Method -----------------

const OverallBalance3 = accounts
  .flatMap((move) => move.movements)
  .reduce((acc, move) => acc + move);
console.log(OverallBalance3);

// console.log(accounts);
// const OverallBalance4 = accounts.flatMap((acc) => acc.owner.startsWith("J"));
// const OverallBalance5 = accounts.flatMap((acc) => acc.owner.startsWith("S"));
// console.log(OverallBalance5);
// console.log(OverallBalance4);

//----------------- 23. Sorting Array Value ----------------

console.log(movements);
//--------- Ascending ------------------
movements.sort((a, b) => {
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});
console.log(movements);

// ---------23. btnSort ------------
let sorted = false;
btnSort.addEventListener("click", (ele) => {
  ele.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

//-----------24. More ways to creating and Filling Array ----------------
// const x = new Array(7);
// console.log(x);
// x.fill(1, 5);
// console.log(x);

// const NewArr = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(newArray);

// console.log(movementUI);
labelBalance.style.cursor = "pointer";
labelBalance.addEventListener("click", () => {
  const movementUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (ele) => ele.textContent.replace("€", " ")
  );

  console.log(movementUI);

  // const movementUI2 = [...document.querySelectorAll(".movements__value")];
  // console.log(movementUI2);
});
