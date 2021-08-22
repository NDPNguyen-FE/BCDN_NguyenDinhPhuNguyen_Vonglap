const oddNum = document.querySelector("#odd");
const evenNum = document.querySelector("#even");
const totalNumber = document.querySelector(".total");
const minNum = document.querySelector(".minNum");
const numX = document.querySelector("#number1");
const numN = document.querySelector("#number2");
const btnSum = document.querySelector(".calcu");
const resultSum = document.querySelector(".resultSum");
const number = document.querySelector("#number");
const btnFac = document.querySelector(".calFactorial");
const resultFac = document.querySelector(".resultFactorial");
const showDiv = document.querySelector(".showDiv");
const btnInner = document.querySelector(".innerDiv");
const inputLimit = document.querySelector("#limit");
const btnPrime = document.querySelector(".showPrime");
const innerPrime = document.querySelector(".innerPrime");
const btnTotal = document.querySelector(".btnTotal");

function printNumber() {
  var odd = "";
  var even = "";
  // // for(let i = 0; i < 100; i++){
  // //     if(i % 2 === 0){
  // //         i = i.toString();
  // //         even = even + " " + i
  // //     }else{
  // //         odd = odd + " " + i
  // //     }
  // // }
  // evenNum.innerHTML = even;
  // oddNum.innerHTML = odd;
  let i = 0;
  while (i < 100) {
    if (i % 2 === 0) {
      i = i.toString();
      even = even + " " + i;
    } else {
      odd = odd + " " + i;
    }
    i++;
    evenNum.innerHTML = even;
    oddNum.innerHTML = odd;
  }
}

printNumber();

function countNumber() {
  let count = 0;

  // for (let i = 0; i < 1000; i++) {
  //   if (i % 3 === 0) {
  //     count ++;
  //   }
  //   totalNumber.innerHTML = count;
  // }
  let j = 0;
  while (j < 1000) {
    if (j % 3 === 0) {
      count++;
    }
    j++;
    totalNumber.innerHTML = count;
  }
}

btnTotal.addEventListener("click", countNumber);

function minNumber() {
  let sum = 0;
  let number = 0;

  for (let i = 0; i < 10000; i++) {
    i += number;
    number++;
    minNum.innerHTML = number;
  }

  // while (sum < 10000) {
  //   number++;
  //   sum += number;
  // }

  // console.log(number);
  // minNum.innerHTML = number;
}

minNumber();

function calSum() {
  let tich = 1;
  let sum = 0;
  let i = 1;

  // for (let i = 1; i <= Number(numN.value); i++) {
  //   tich = tich * Number(numX.value);
  //   sum = sum + tich;
  // }

  while (i <= Number(numN.value)) {
    tich = tich * Number(numX.value);
    sum = sum + tich;
    i++;
  }
  resultSum.innerHTML = `Tổng là : ${sum}`;
}

btnSum.addEventListener("click", calSum);

function calFactorial() {
  let factorial = 1;
  let i = 1;
  // for (let i = 1; i <= Number(number.value); i++) {
  //   factorial *= i;
  // }

  while (i <= Number(number.value)) {
    factorial *= i;
    i++;
  }

  resultFac.innerHTML = `Giai thừa là:  ${factorial}`;
}

btnFac.addEventListener("click", calFactorial);

function printDiv() {
  let content = ``;
  let i = 0;
  // for (let i = 0; i <= 10; i++) {
  //   if (i % 2 === 0) {
  //     content += `<div class="bg-primary" style="height: 3rem; color:#fff;">Div lẻ</div>`;
  //   } else {
  //     content += `<div class="bg-danger" style="height: 3rem; color:#fff">Div chẵn</div>`;
  //   }
  // }
  while (i <= 10) {
    if (i % 2 === 0) {
      content += `<div class="bg-primary" style="height: 3rem; color:#fff;">Div lẻ</div>`;
    } else {
      content += `<div class="bg-danger" style="height: 3rem; color:#fff">Div chẵn</div>`;
    }
    i++;
  }
  showDiv.innerHTML = content;
}

btnInner.addEventListener("click", printDiv);

function printPrime() {
  let result = " ";

  for (let i = 2; i < Number(inputLimit.value); i++) {
    let flag = true;
    function isPrime(num) {
      if (num === 2) {
        flag = true;
      } else if (num % 2 === 0) {
        flag = false;
      } else {
        for (var i = 3; i < num - 1; i += 2) {
          if (num % i == 0) {
            flag = false;
            break;
          }
        }
      }
    }
    isPrime(i);
    if (flag) {
      result += " " + i;
    }
  }

  innerPrime.innerHTML = `Danh sách số nguyên tố: ${result}`;
}
btnPrime.addEventListener("click", printPrime);
