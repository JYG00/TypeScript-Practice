// Generic 사용하는 쪽에서 타입을 적어줌

function getSize<T>(arr: T[]): number {
  return arr.length;
}

const arr1 = [1, 2, 3];
getSize<number>(arr1); // 3

const arr2 = ["a", "b", "c"];
getSize<string>(arr2); // 3

const arr3 = [false, true, true];
getSize(arr3);

const arr4 = [{}, {}, { name: "tom" }];
getSize(arr4);

interface Mobile0000<T> {
  name: string;
  price: number;
  option: T;
}

const m1: Mobile0000<string> = {
  name: "s20",
  price: 100,
  option: "good",
};

const m2: Mobile0000<object> = {
  name: "s21",
  price: 100,
  option: { color: "blue", coupon: false },
};

interface User0101 {
  name: string;
  age: number;
}

interface Car0101 {
  name: boolean;
  color: string;
}

interface Book {
  price: number;
}

const user0001: User0101 = { name: "a", age: 10 };
const car0001: Car0101 = { name: true, color: "blue" };
const book: Book = { price: 3000 };

function showName1<T extends { name: string }>(data: T): string {
  return data.name;
}

showName1(user0001);
// showName(car0001);
// showName(book);
