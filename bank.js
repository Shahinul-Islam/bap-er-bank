//get deposite, total and withdraw value
let totalDeposite = document.getElementById("total-deposite");
let totalWithdraw = document.getElementById("total-withdraw");
let totalBalance = document.getElementById("total-balance");

let lastWithdraw = document.getElementById("last-withdraw");

let lastDeposite = document.getElementById("last-deposite");

//target both button
const depositeBtn = document.getElementById("deposite-btn");
const withdrawBtn = document.getElementById("withdraw-btn");

//add money to total deposite section
depositeBtn.addEventListener("click", function () {
  let currentDepositeAmount = totalDeposite.innerText;
  let newDepositeTotal =
    parseInt(currentDepositeAmount) + parseInt(lastDeposite.value);
  totalDeposite.innerText = newDepositeTotal;
  let currentTotalBalance = totalBalance.innerText;
  let newTotalBalance =
    parseInt(currentTotalBalance) + parseInt(lastDeposite.value);
  totalBalance.innerText = newTotalBalance;
  if (totalBalance.innerText < 0) {
    alert("You are in danger!");
  }
  lastDeposite.value = "";
});

//withdraw section
withdrawBtn.addEventListener("click", function () {
  let currentWithdraw = totalWithdraw.innerText;
  let newTotalWithdraw =
    parseInt(currentWithdraw) + parseInt(lastWithdraw.value);
  totalWithdraw.innerText = newTotalWithdraw;
  totalBalance.innerText =
    parseInt(totalBalance.innerText) - parseInt(lastWithdraw.value);
  if (totalBalance.innerText < 0) {
    alert("You are in danger!");
  } else if (parseInt(lastWithdraw.value) > parseInt(totalBalance.innerText)) {
    alert("You are in danger!");
  }
  lastWithdraw.value = "";
});
