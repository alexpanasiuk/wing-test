export const setClass = opt => {
  let arrayOfClasses = [];
  for (let cssName in opt) {
    if (opt[cssName]) {
      arrayOfClasses.push(cssName);
    }
  }

  return arrayOfClasses.join(' ');
};

export const splitNumWithComa = num => {
  let arrNum = parseInt(num, 10)
    .toString()
    .split('')
    .reverse();
  let numWithComma = '';

  for (let i = 0; i < arrNum.length; i++) {
    if (i % 3 || i === 0) {
      numWithComma = arrNum[i] + numWithComma;
    } else {
      numWithComma = arrNum[i] + ',' + numWithComma;
    }
  }

  return numWithComma + num.toString().split('.')[1];
};
