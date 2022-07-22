// let user: object;

// user = {
//         name:'tom',
//         age:30
// }

// console.log(user.name);

type Score = "A" | "B" | "C" | "F";

// 올바른 예
interface User {
  name: string;
  age: number;
  gender?: string;
  readonly birthYear: number;
  //   1?: string;
  //   2?: string;
  //   3?: string;
  //   4?: string;
  // grade = key
  [grade: number]: Score;
}

let user: User = {
  name: "tom",
  age: 22,
  birthYear: 2020,
  1: "A",
  2: "B",
  //   정해진것 외에 할당할 수 없습니다
  //   3: "z",
};

user.age = 10;
user.gender = "male";
// 읽기 전용이므로 값을 마음대로 수정할 수 없습니다
// user.birthYear = 2033;

console.log(user.age);

interface Add {
  (num1: number, num2: number): number;
}

const add: Add = function (x, y) {
  return x + y;
};
add(10, 20);

interface isAdult {
  (age: number): boolean;
}

const bc: isAdult = (age) => {
  return age > 19;
};
bc(33); // true
// implements
interface Car {
  color: string;
  wheels: number;
  start(): void;
}

class Bmw implements Car {
  color;
  wheels = 4;

  constructor(c: string) {
    this.color = c;
  }

  start() {
    console.log("go");
  }
}

const car = new Bmw("green");
console.log(car.color);
car.start();

// extends
interface Benz extends Car {
  door: number;
  stop(): void;
}

const benz: Benz = {
  door: 5,
  stop() {
    console.log("stop");
  },
  // extends를 했으면 부모의 속성도 같이 명시해줘야 한다
  wheels: 4,
  color: "black",
  start() {
    console.log("go");
  },
};

// implement

interface Car {
  color: string;
  wheels: number;
  start(): void;
}

interface Toy {
  name: string;
}

interface ToyCar extends Car, Toy {
  price: number;
}
