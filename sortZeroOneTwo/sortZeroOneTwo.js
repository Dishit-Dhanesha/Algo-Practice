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
