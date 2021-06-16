'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');




const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter((mov) => {
  return mov > 0;
});

console.log(deposits);

const createUserNames = (arr_with_accounts) => {
  arr_with_accounts.forEach( (one_acc) => {
    one_acc.username = one_acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  })
};
createUserNames(accounts);
console.log(accounts);


const updateUI = (acc) => {
  // display movements
  displayMovements(acc.movements);
  //display balance
  calcDisplayBalance(acc);
  // display summary
  calcDisplaySummary(acc);
}

const calcDisplayBalance = acc => {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} PLN`;
};
//calcDisplayBalance(account1.movements);

const calcDisplaySummary = acc => {
 const incomes = acc.movements
 .filter(mov => mov > 0)
 .reduce((acc, mov) => acc + mov, 0);
 labelSumIn.textContent = `${incomes} PLN`;

 const out = acc.movements
 .filter(mov => mov < 0)
 .reduce((acc, mov) => acc + mov, 0);
 labelSumOut.textContent = `${Math.abs(out)} PLN`;

 const interest = acc.movements
 .filter(mov => mov > 0)
 .map(deposit => deposit * acc.interestRate / 100)
 .reduce((acc, inter) => acc + inter, 0);
 labelSumInterest.textContent = `${interest} PLN`;
};
//calcDisplaySummary(account1.movements);

const displayMovements = function(movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function(mov, i){
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>`;
    
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });      
}

//displayMovements(account1.movements);
//console.log(containerMovements);

const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);




 // FIND METHOD
const firstWithdrawal = movements.find(mov => mov < 0);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');

let currentAccount;
btnLogin.addEventListener('click', e => {
  //prevent form from permitting
  e.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);

  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log("LOGIN OK");

    // display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    updateUI(currentAccount);

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
  }
});

btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  inputTransferAmount.value = inputTransferTo.value = '';
  if (amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    console.log("Transfer valid");

    // doing transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
});



btnClose.addEventListener('click', e => {
  e.preventDefault();

  if(inputCloseUsername.value === currentAccount.username 
    && Number(inputClosePin.value) === currentAccount.pin) {
      const index = accounts.findIndex(acc => acc.username === currentAccount.username);
      console.log(index);

      //delete account
      accounts.splice(index, 1);

      // hide UI
      containerApp.style.opacity = 0;
    }

    inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false

btnSort.addEventListener('click', e => {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);

  sorted = !sorted;
});






// const euro = [10, 20, 30];
// const euroToUsd = 1.1;
// const newArrayUsd = euro.map(function(currentElement){
//   return currentElement * euroToUsd;
// });
// console.log(newArrayUsd);

// const newArrayUsd2 = euro.map(currenctElement => currenctElement * euroToUsd);
// console.log(newArrayUsd2);

// const descriptionArray = euro.map((ce, i, arr) => {
//   if(ce > 0) {
//     return `current element nr ${i+1} has value = ${ce}`;
//   } else {
//     return `current element nr ${i+1} has value [withdraw] = ${Mat.abs(ce)}`;
//   }
// });
// console.log(descriptionArray);

// const descriptionArray = euro.map((ce, i) =>
//   `Current element nr ${i+1} has value ${ce > 0 ? `${ce}` : `[withdraw] = ${Math.abs(ce)}`}`
// );
// console.log(descriptionArray)

//for(const ce of movements) {
//  if(ce > 0) {
//    console.log(`your deposite = ${ce}`);
//  } else {
//    console.log(`your debet = ${ce}`);
//    console.log(`your withdraw = ${Math.abs(ce)}`);
//  }
//}


//let arr = ['a', 'b', 'c', 'd', 'e'];
//slice
//console.log(arr.slice(2));
//console.log(arr.slice(2, 4));
//console.log(arr.slice(-2));
//console.log(arr.slice(1, -2));
//console.log(arr);

// SPLICE - mutate original array
//console.log(arr.splice(2));
//console.log(arr);

//arr.splice(1, 2); // after position 1 delete 2 elements
//console.log(arr);

// REVERSE - mutate original array
//arr = ['a', 'b', 'c', 'd', 'e'];
//const arr2 = ['j', 'i', 'h', 'g', 'f'];
//console.log(arr2.reverse());
//console.log(arr2);

// CONCAT
//const letters = arr.concat(arr2);
//console.log(letters);
//console.log([...arr, ...arr2]); //concate

//movements.forEach(function(ce) {
//  if(ce > 0) {
//    console.log(`your deposite = ${ce}`);
//  } else {
//    console.log(`your debet = ${ce}`);
//  }
// });

//for(const [i, ce] of movements.entries()) {
//  if(ce > 0) {
//    console.log(`movements ${i+1}, your deposite ${ce}`);
//  } else {
//    console.log(`movements ${i+1}, your debt ${ce}`);
//  }
//};

//movements.forEach(function(movement, i, arr) {
//  movement > 0 ? console.log(`movements ${i+1}, your deposite ${movement}`) : console.log(`movements ${i+1}, your debt ${movement}`);
//});


//MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//currencies.forEach(function(value, key, map){
//  console.log(`${key}, ${value}`);
//})

//SET
//const curriences2 = new Set(['usd', 'pln', 'eur']);
//curriences2.forEach(function(value, _, map) {
//  console.log(`${value}`);
//});
