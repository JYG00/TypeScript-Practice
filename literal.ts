// Literal Types

const userName1 = "Bob"; // userName1 의 타입은 'Bob' 바뀔 일이 없기 때문
let userName2 = "Tom"; // userName2는 바뀔 수 있으니 string 타입

// userName2 = 3; // 최초 할당한 값이 string이라서 error
type Job = "police" | "developer" | "teacher";

interface User4 {
  name: string;
  job: Job;
}

const user001: User4 = {
  name: "Bob",
  job: "developer",
};

interface HighSchoolStudent {
  name: number | string;
  grade: 1 | 2 | 3;
}

interface Car000 {
  name: "car";
  color: string;
  start(): void;
}

interface Mobile {
  name: "mobile";
  color: string;
  call(): void;
}

// 유니온 타입 사용 car 또는 mobile
function getGift(gift: Car000 | Mobile) {
  console.log(gift.color);
  if (gift.name === "car") {
    gift.start();
  } else {
    gift.call();
  }
}

// 교차 타입 (A 그리고 B)
interface Car001 {
  name: string;
  start(): void;
}

interface Toy {
  name: string;
  color: string;
  price: number;
}

const toyCar: Toy & Car001 = {
  name: "타요",
  color: "blue",
  price: 1000,
  start() {},
};
