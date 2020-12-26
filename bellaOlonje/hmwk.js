// task 1

const isAdult = function (age) {
  if (age === NAN) {
    return false;
  }
  if (age >= 18) {
    console.log("Access is open ");
  } else {
    console.log("You need to grow up for see this contant!");
  }
};
//task 2
const checkMultiplicity = function (number1, number2) {
  const number1 = prompt("Enter the 1st number");
  const number2 = prompt("Enter the 2st number");
  if (number1 || number2 === NAN) {
    return false;
  }
  if (number1 > number2) {
    return (number1 %= number2);
  }
  if (number1 < number2) {
    return (number2 %= number1);
  }
  if (number1 === number2) {
    return true;
  }
};
//task 3
const checktriangle = function (a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    console.log("Triangle are not possible!");
    return false;
  } else {
    console.log("Triangle are possible!");
    return true;
  }
};

// task 4
const areaRhombus = function (a, h) {
  return a * h;
};

const areaTriangle = function (a, h) {
  return (1 / 2) * a * h;
};

const areaCylinder = function (radius, h) {
  const PI = 3.14;
  return 2 * PI * radius * h;
};

const areaRectangle = function (a, b) {
  return a * b;
};

const userСhoice = prompt(
  "Hi,chose the case: 1-rhombus, 2-cylinder, 3-triangle, 4-rectangle"
);
switch (userСhoice) {
  case "1": {
    const side = prompt("Side: ");
    const height = prompt("Height: ");
    if (side || height === NAN) {
      return false;
    }
    areaRhombus(side, height);
    break;
  }
  case "2": {
    const side = prompt("Side: ");
    const radius = prompt("Radius: ");
    if (side || radius === NAN) {
      return false;
    }
    areaCylinder(side, radius);
    break;
  }
  case "3": {
    const side = prompt("Side: ");
    const height = prompt("Height: ");
    if (side || height === NAN) {
      return false;
    }
    areaTriangle(side, height);
    break;
  }
  case "4": {
    const side1 = prompt("1st Side: ");
    const side2 = prompt("2nd Side: ");
    if (side1 || side2 === NAN) {
      return false;
    }
    areaRectangle(side1, side2);
    break;
  }

  default:{
    break;
  }
}