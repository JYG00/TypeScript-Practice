let car: string = "benz";
let age: number = 30;
let isAdult: boolean = false;
let a: number[] = [1, 2, 3];
let a2: Array<number> = [1, 2, 3];

let b: [string, number] = ["", 1];

function showError(): never {
  throw new Error();
}

function infLoop(): never {
  while (true) {
    // blabla
  }
}

// enum
enum Os {
  window = 3,
  Ios = 10,
  Android,
}

console.log(Os[10]); // Ios
console.log(Os["Ios"]); // 10

let myOs: Os;
myOs = Os.window;

// null, undefined
let c: null = null;
let d: undefined;
