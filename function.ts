// function
function add2(num1: number, num2: number): number {
  return num1 + num2;
}

function hello(name?: string) {
  return `Hello! ${name}`;
}

function hello2(name = "world") {
  return `Hello ${name}!`;
}

const result = hello();
const result2 = hello("Jany");
const result3 = hello2();

function hello3(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hello ${name}. You are ${age}`;
  } else {
    return `Hello, ${name}`;
  }
}

console.log(hello3("brian"));
console.log(hello3("tom", 22));

// 나머지 매게변수
function add12(...nums: number[]) {
  return nums.reduce((result, num) => result + num, 0);
}

add12(1, 2, 3); //6
add12(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //55

interface User2 {
  name: string;
}

const Sam: User2 = { name: "Sam" };

function showName(this: User, age: number, gender: "m" | "f") {
  console.log(this.name, age, gender);
}

const some = showName.bind(Sam);
some(30, "m");

// overload
interface User3 {
  name: string;
  age: number;
}
function join(name: string, age: number): User3;
function join(name: string, age: string): string;
function join(name: string, age: number | string): User3 | string {
  if (typeof age === "number") {
    return {
      name,
      age,
    };
  } else {
    return "나이는 숫자로 입력하세요";
  }
}

const sam: User3 = join("Sam", 30);
const brown: string = join("Sam", "30");
