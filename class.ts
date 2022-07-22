// 접근제어지시자 (public 전부 가능,private 클래스 한정,protected 부모 자식 한정)
class Car1000 {
  // private 대신 #을 쓸 수 있음
  //   private name: string = "car";
  //   #name: string = "car";
  protected name: string = "car";
  color: string;
  // static 클래스명으로 접근할 수 있다. this로 접근 ㄴㄴ
  static wheels = 4;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
    console.log(this.name);
    //     console.log(this.wheels);
    console.log(Car1000.wheels);
  }
}

class bmw extends Car1000 {
  constructor(color: string) {
    // super을 써줘야함
    super(color);
  }
  showName() {
    console.log(super.name);
  }
}

const z4 = new bmw("black");
// console.log(z4.name);

// 추상 클래스
abstract class human {
  age: number;
  name: string;
  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }
  run() {
    console.log("run..");
  }
  // 추상 메서드는 상속받은 쪽에서 반드시 구현해줘야 합니다!
  abstract dosomething(): void;
}

class korean extends human {
  dosomething(): void {}
}

// 추상 클래스는 new 키워드로 생성할 수 없습니다
// const jeong = new human(12,"jeong");
