//Method One Brute Force

function sortZeroOneTwo(arr) {
  let zero = 0;
  let one = 0;
  let two = 0;

  for (let e of arr) {
    if (e == "0") zero++;
    else if (e == "1") one++;
    else two++;
  }
  arr.length = 0;

  for (let i = 0; i < zero; i++) arr.push(0);
  for (let i = 0; i < one; i++) arr.push(1);
  for (let i = 0; i < two; i++) arr.push(2);

  console.log(arr);
}

sortZeroOneTwo([0, 0, 0, 2, 1, 0, 2, 2, 2]);

//Dutch National Flag Algorithm or One Pass Method

function sortZeroOneTwo(a) {
  let lo = 0;
  let hi = a.length - 1;
  let mid = 0;
  let temp = 0;
  while (mid <= hi) {
    if (a[mid] == 0) {
      temp = a[lo];
      a[lo] = a[mid];
      a[mid] = temp;
      lo++;
      mid++;
    } else if (a[mid] == 1) {
      mid++;
    } else {
      temp = a[mid];
      a[mid] = a[hi];
      a[hi] = temp;
      hi--;
    }
  }
  console.log(a);
}

sortZeroOneTwo([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]);
