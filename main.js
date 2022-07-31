var listNumber = [];
var listFloatNumber = [];
// Nhập số
document
  .querySelector(".container button#btnAddNumber")
  .addEventListener("click", function () {
    // input
    var number = document.getElementById("num").value * 1;

    // process
    listNumber.push(number);
  });

// Xuất số
document
  .querySelector(".container button#btnPopNumber")
  .addEventListener("click", function () {
    document.getElementById("showInfo").innerHTML = listNumber;
  });

function isPositiveNumber(num__in) {
  var result = false;

  if (num__in > 0) {
    result = true;
  }
  return result;
}

function isNegativeNumber(num__in) {
  var result = false;

  if (num__in < 0) {
    result = true;
  }
  return result;
}

// 1. Tổng số dương
document
  .querySelector(".container button#btnCalcSum")
  .addEventListener("click", function () {
    var sum = 0;
    // process
    for (var i = 0; i < listNumber.length; i++) {
      if (isPositiveNumber(listNumber[i])) {
        sum += listNumber[i];
      }
    }
    // output
    var output = "";
    output = "Tổng số dương: " + sum;
    document.getElementById("showSum").innerHTML = output;
  });

// 2. Đếm số dương
document
  .querySelector(".container button#btnCountPositive")
  .addEventListener("click", function () {
    var count = 0;
    // process
    for (var i = 0; i < listNumber.length; i++) {
      if (isPositiveNumber(listNumber[i])) {
        count++;
      }
    }
    // output
    var output = "Số dương: " + count;
    document.getElementById("showPositiveNumber").innerHTML = output;
  });

// 3. Tìm số nhỏ nhất
document
  .querySelector(".container button#btnFindSmallest")
  .addEventListener("click", function () {
    // process
    if (listNumber.length === 0) {
      alert("Please add number");
      return;
    }

    var smallest = listNumber[0];
    for (var i = 1; i < listNumber.length; i++) {
      if (listNumber[i] < smallest) {
        smallest = listNumber[i];
      }
    }
    // output
    var output = "";
    output = "Số nhỏ nhất: " + smallest;
    document.getElementById("showSmallest").innerHTML = output;
  });

// 4. Tìm số dương nhỏ nhất
document
  .querySelector(".container button#btnFindSmallestPositive")
  .addEventListener("click", function () {
    if (listNumber.length === 0) {
      alert("Please add number");
      return;
    }
    // process
    for (var i = 0; i < listNumber.length; i++) {
      if (isPositiveNumber(listNumber[i]) && smallestPositive == null) {
        var smallestPositive = listNumber[i];
        continue;
      }

      if (isPositiveNumber(listNumber[i])) {
        if (listNumber[i] < smallestPositive) {
          smallestPositive = listNumber[i];
        }
      }
    }
    // output
    var output = "Số dương nhỏ nhất: " + smallestPositive;
    document.getElementById("showSmallestPositive").innerHTML = output;
  });

// 5. Tìm số chẵn cuối cùng
document
  .querySelector(".container button#btnFindLastEvenNumber")
  .addEventListener("click", function () {
    if (listNumber.length === 0) {
      alert("Please add number");
      return;
    }

    var lastEvenNumber = 0;
    // process
    for (var i = 0; i < listNumber.length; i++) {
      if (listNumber[i] % 2 === 0) {
        lastEvenNumber = listNumber[i];
      }
    }

    // output
    var output = "";
    output = "Số chẵn cuối cùng: " + lastEvenNumber;
    document.getElementById("showLastEvenNumber").innerHTML = output;
  });

// 6. Đổi chỗ
document
  .querySelector(".container button#btnSwap")
  .addEventListener("click", function () {
    if (listNumber.length === 0) {
      alert("Please add number");
      return;
    }
    var temp = 0;
    // input
    var position1 = document.getElementById("num1").value * 1;
    var position2 = document.getElementById("num2").value * 1;
    // process
    temp = listNumber[position1];
    listNumber[position1] = listNumber[position2];
    listNumber[position2] = temp;

    // output
    var output = "";
    output = "Mảng sau khi đổi: " + listNumber;
    document.getElementById("showSwap").innerHTML = output;
  });

// 7. Sắp xếp tăng dần
document
  .querySelector(".container button#btnArrangeNumber")
  .addEventListener("click", function () {
    if (listNumber.length === 0) {
      alert("Please add number");
      return;
    }
    var smallest = listNumber[0];
    // process
    for (var i = 0; i < listNumber.length - 1; i++) {
      for (var j = i + 1; j < listNumber.length; j++) {
        if (listNumber[j] < listNumber[i]) {
          var temp = 0;
          temp = listNumber[j];
          listNumber[j] = listNumber[i];
          listNumber[i] = temp;
        }
      }
    }
    // output
    var output = "";
    output = "Mảng sau khi sắp xếp: " + listNumber;
    document.getElementById("showAscendingNumber").innerHTML = output;
  });

// 8. Tìm số nguyên tố đầu tiên
function isPrimeNumber(num_in) {
  var result = true;

  for (var i = 2; i < num_in; i++) {
    if (num_in % i === 0) {
      result = false;
    }
  }
  return result;
}

document
  .querySelector(".container button#btnPrimeNumber")
  .addEventListener("click", function () {
    var firstPrimeNumber = 0;
    // process
    for (var i = 0; i < listNumber.length; i++) {
      if (isPrimeNumber(listNumber[i])) {
        firstPrimeNumber = listNumber[i];
        break;
      }
    }

    // output
    var output = "Số nguyên tố đầu tiên: " + firstPrimeNumber;
    document.querySelector("#showPrimeNumber").innerHTML = output;
  });

// 9. Đếm số nguyên
function countIntNumber(listFloatNumber_in) {
  var count = 0;

  for (var i = 0; i < listFloatNumber_in.length; i++) {
    if (Number.isInteger(listFloatNumber_in[i])) {
      count++;
    }
  }
  return count;
}

document
  .querySelector("#btnAddFloatNumber")
  .addEventListener("click", function () {
    // input
    var floatNumber = document.getElementById("floatNum").value * 1;

    // output
    listFloatNumber.push(floatNumber);
    document.querySelector("#showFloatNumber").innerHTML = listFloatNumber;
  });

document.querySelector("#btnCountIntNumber").onclick = function () {
  // process
  var intNumber = countIntNumber(listFloatNumber);

  // output
  var output = "Số nguyên: " + intNumber;
  document.querySelector("#showIntNumber").innerHTML = output;
};

// 10. So sánh số lượng âm và dương
document.querySelector("#btnCompare").addEventListener("click", function () {
  var negativeCount = 0;
  var positiveCount = 0;

  for (var i = 0; i < listNumber.length; i++) {
    if (isPositiveNumber(listNumber[i])) {
      positiveCount++;
    } else if (isNegativeNumber(listNumber[i])) {
      negativeCount++;
    }
  }

  var output = "";
  if (negativeCount > positiveCount) {
    output = "Số âm > Số dương";
  } else if (positiveCount > negativeCount) {
    output = "Số dương > số âm";
  } else {
    output = "Số âm = Số dương";
  }

  // print output
  document.getElementById("showCompare").innerHTML = output;
});
