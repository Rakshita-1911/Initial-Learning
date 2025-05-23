function randomInTwoRange(min1, max1, min2, max2) {

  const pickFirstRange = Math.random() < 0.5;

  if (pickFirstRange) {
    return Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
  } else {
    return Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
  }
}

console.log(randomInTwoRange(-100, 0, 800, 900));
