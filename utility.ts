// keyof
interface User22 {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
  birth?: string;
}

type UserKey = keyof User22; // 'id' | 'name' | 'age' | 'gender'
const uk: UserKey = "age";

// Partial<T>
// 파셔는 프로퍼티를 모두 옵션으로 바꿔줍니다
let admin: Partial<User22> = {
  id: 1,
  name: "Tom",
};
// 파셔를 쓰는것은 아래와 같다고 보면 됩니다
// interface User22 {
//         id?: number;
//         name?: string;
//         age?: number;
//         gender?: "m" | "f";
//       }

// Required<T>
// 모든 속성을 필수로 바꿔줍니다 파셔의 반대?
let admin2: Required<User22> = {
  id: 2,
  name: "admin",
  age: 33,
  gender: "m",
  birth: "000127",
};

// ReadOnly<T>
// 모든 속성을 readonly로 바꿔줍니다
let admin3: Readonly<User22> = {
  id: 2,
  name: "admin",
  age: 33,
  gender: "m",
};
// 수정은 불가하다
// admin3.age = 34;

// Record<K,T>
interface Score001 {
  "1": "A" | "B" | "C" | "D";
  "2": "A" | "B" | "C" | "D";
  "3": "A" | "B" | "C" | "D";
  "4": "A" | "B" | "C" | "D";
}

const score: Score001 = {
  1: "A",
  2: "C",
  3: "D",
  4: "A",
};

const score1: Record<"1" | "2" | "3" | "4", "A" | "B" | "C" | "D"> = {
  1: "A",
  2: "C",
  3: "D",
  4: "A",
};

type Grade = "1" | "2" | "3" | "4";
type Scores = "A" | "B" | "C" | "D";

const score2: Record<Grade, Scores> = {
  1: "A",
  2: "C",
  3: "D",
  4: "A",
};

interface User1234 {
  id: number;
  name: string;
  age: number;
}

function isVaild(user: User1234) {
  const result: Record<keyof User1234, boolean> = {
    id: user.id > 0,
    name: user.name !== "",
    age: user.age > 0,
  };
  return result;
}

// Pick<T,K>
interface User4321 {
  id: number;
  name: string;
  age: number;
  gender: "M" | "w";
}
// User4321로부터 프로퍼티 id와 name만 사용하겠습니다
const admin033: Pick<User4321, "id" | "name"> = {
  id: 0,
  name: "bob",
};

// Omit<T,K>
// User4321로부터 프로퍼티 age와 gender를 제외하고 사용하겠습니다
const admin044: Omit<User4321, "age" | "gender"> = {
  id: 2,
  name: "brian",
};

// Exclude<T1,T2>
// 겹치는 타입은 제외
type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string>; // boolean 만 남게된다

// NonNullable<Type>
// null 과 undefined 제외
type T3 = string | null | undefined | void;
type T4 = NonNullable<T3>;
