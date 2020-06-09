const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const addFive = require("../problems/00-arrow-addfive.js");
const arrowGetFullName = require("../problems/01-arrow-full-name.js");
const arrowMyMap = require("../problems/02-arrow-my-map.js");
const arrowRestSum = require("../problems/03-arrow-rest-sum.js");
const arrowAvgValue = require("../problems/04-arrow-average-value.js");
const car = require("../problems/05-car-drive.js");
const calculator = require("../problems/06-calculator.js");
const fancyCalculator = require("../problems/07-fancy-calculator.js");
const sandwichMaker = require("../problems/08-closure-sandwiches.js");
const dynamicMultiply = require("../problems/09-closure-dynamic-multi.js");
const callOnTarget = require("../problems/12-call-on-target.js");
const hiddenCounter = require("../problems/13-hidden-counter.js");
const curriedSum = require("../problems/14-curried-sum.js");

describe("addFive()", function () {
  it("should add 5 to any passed in argument", function () {
    const test1 = addFive(0);
    const result1 = 5;

    const test2 = addFive(10);
    const result2 = 15;

    const test3 = addFive(37);
    const result3 = 42;

    assert.deepEqual(test1, result1);
    assert.deepEqual(test2, result2);
    assert.deepEqual(test3, result3);
  });

  it("should be an arrow function", function () {
    expect(typeof addFive.prototype).to.equal("undefined");
  });
});

describe("arrowGetFullName()", function () {
  it("should return the full name values from within the object", function () {
    const p1 = { firstName: "John", lastName: "Doe" };
    const test1 = arrowGetFullName(p1);
    const p2 = { firstName: "Charlie", lastName: "Brown", age: 9 };
    const test2 = arrowGetFullName(p2);

    const result1 = "John Doe";
    const result2 = "Charlie Brown";

    assert.deepEqual(test1, result1);
    assert.deepEqual(test2, result2);
  });

  it("should be an arrow function", function () {
    expect(typeof arrowGetFullName.prototype).to.equal("undefined");
  });
});

describe("arrowMyMap()", function () {
  it("should function like the built in Array#map", function () {
    let result1 = arrowMyMap([100, 25, 81, 64], Math.sqrt);
    expect(result1).to.eql([10, 5, 9, 8]);

    let result2 = arrowMyMap(["run", "Forrest"], function (el) {
      return el.toUpperCase() + "!";
    });
    expect(result2).to.eql(["RUN!", "FORREST!"]);
  });

  it("should be an arrow function", function () {
    expect(typeof arrowMyMap.prototype).to.equal("undefined");
  });

  it("should not call the built in Array#map", function () {
    const mapSpy = chai.spy.on(Array.prototype, "map");
    arrowMyMap([100, 25, 81, 64], Math.sqrt);
    expect(mapSpy).to.not.have.been.called();
  });
});

describe("arrowRestSum()", function () {
  it("should add any number of incoming arguments", function () {
    const test1 = arrowRestSum(3, 5, 6);
    const result1 = 14;

    const test2 = arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9);
    const result2 = 45;

    const test3 = arrowRestSum(0, 0);
    const result3 = 0;

    assert.deepEqual(test1, result1);
    assert.deepEqual(test2, result2);
    assert.deepEqual(test3, result3);
  });

  it("should be an arrow function", function () {
    expect(typeof arrowRestSum.prototype).to.equal("undefined");
  });
});

describe("arrowAvgValue()", function () {
  it("should return the average of an array of numbers", function () {
    assert.equal(arrowAvgValue([10, 20]), 15);
    assert.equal(arrowAvgValue([2, 3, 7]), 4);
    assert.equal(arrowAvgValue([100, 60, 64]), 74.66666666666667);
  });

  it("should be an arrow function", function () {
    expect(typeof arrowAvgValue.prototype).to.equal("undefined");
  });
});

describe("car#drive()", function () {
  it("should return the speed of the car after calling car#drive", function () {
    let test1 = car.drive(10);
    let result1 = car.speed;

    let test2 = car.drive(50);
    let result2 = car.speed;

    let test3 = car.drive(100);
    let result3 = car.speed;

    assert.equal(test1, result1);
    assert.equal(test2, result2);
    assert.equal(test3, result3);
  });
});

describe("calculator", function () {
  it("should add numbers", function () {
    assert.equal(calculator.add(50), 50);
  });
  it("should subtract numbers", function () {
    assert.equal(calculator.subtract(35), 15);
  });
  it("should multiply numbers", function () {
    assert.equal(calculator.multiply(10), 150);
  });
  it("should divide numbers", function () {
    assert.equal(calculator.divide(5), 30);
  });
});

describe("fancyCalculator", function () {
  // set our total to 5
  fancyCalculator.setTotal(5);

  it("square the total", function () {
    assert.equal(fancyCalculator.squared(), 25);
  });
  it("should modulo the total by the arg number", function () {
    assert.equal(fancyCalculator.modulo(4), 1);
  });
});

describe("sandwichMaker()", function () {
  it("should return a function that accepts new arguments for the order", function () {
    let sandwich = sandwichMaker();
    let result1 = "One sandwich with tomato and spinach";
    let result2 = "One sandwich with tomato and spinach and jelly";
    let result3 = "One sandwich with tomato and spinach and jelly and bread";

    assert.equal(sandwich("spinach"), result1);
    assert.equal(sandwich("jelly"), result2);
    assert.equal(sandwich("bread"), result3);
  });
});

describe("dynamicMultiply()", function () {
  it("should return a function that accepts a number", function () {
    const doubler = dynamicMultiply(2);

    assert.equal(doubler(5), 10);
  });

  it("should return a new multiply function for each initial argument", function () {
    const tripler = dynamicMultiply(3);
    const multiplyByFive = dynamicMultiply(5);

    assert.equal(tripler(5), 15);
    assert.equal(multiplyByFive(5), 25);
  });
});

describe("callOnTarget()", function () {
  const cat = {
    name: "Breakfast"
  };

  const mouse = {
    name: "Jerry"
  };

  function greet(other) {
    return "I'm " + this.name + ". Nice to meet you, " + other.name;
  }
  const dog = {
    name: "Noodles",
    chase: function (animal) {
      return (
        "Woof, my name is " + this.name + " and I'm chasing " + animal.name
      );
    }
  };

  it("should invoke a function with context of the first object and the second as an argument", function () {
    let test1 = callOnTarget(greet, cat, mouse);
    let result1 = "I'm Breakfast. Nice to meet you, Jerry";

    let test2 = callOnTarget(greet, mouse, cat);
    let result2 = "I'm Jerry. Nice to meet you, Breakfast";

    let test3 = callOnTarget(dog.chase, cat, dog);
    let result3 = "Woof, my name is Breakfast and I'm chasing Noodles";

    assert.equal(test1, result1);
    assert.equal(test2, result2);
    assert.equal(test3, result3);
  });
});

describe("hiddenCounter()", function () {
  it("should return a function that will increment the counter when invoked", function () {
    let hidden1 = hiddenCounter();
    hidden1();
    let testResult1 = hidden1();

    let hidden2 = hiddenCounter();
    let testResult2 = hidden2();
    assert.equal(testResult1, 2);
    assert.equal(testResult2, 1);
  });
});

describe("curriedSum()", function () {
  it("should sum numbers using currying", function () {
    const sum = curriedSum(4);
    sum(5);
    sum(20);
    sum(30);
    let testResult = sum(20);
    assert.equal(testResult, 75);
  });
  it("should allow the calculator to add multiple numbers using currying", function () {
    const testResult = curriedSum(3)(2)(1)(7);
    assert.equal(testResult, 10);
  });
});
