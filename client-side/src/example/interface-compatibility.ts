// const name = "babb"
// // name = 123

// const arr = [1, 'a']
// // arr = [2, 'b', false]

// window.onmousedown = (mouseEvent) => {
//     console.log(mouseEvent)
// }

// interface Info {
//     name: string
// }

// let info: Info
// const info1 = { name: 'babb', age: 18 }
// info = info1 // 会检测 info1 中是否有 name 属性
// console.log(info)

// 参数个数
// let x = (a: number) => 0
// let y = (b: number, c: string) => 0
// y = x
// // x = y

// 参数类型
// let x = (a: number) => 0
// let y = (b: string) => 0
// // x = y


// 可选参数和剩余参数
// const getSum = (arr: number[], callback: (...args: number[]) => number): number => {
//     return callback(...arr)
// }

// const res = getSum([1, 2, 3], (...args: number[]): number => args.reduce((a, b) => a +b, 0))
// console.log(res)


// 函数参数双向协变
// let funcA = (arg: number | string): void => {}
// let funcB = (arg: number): void => {}
// funcA = funcB
// funcB = funcA


// 返回值类型
// let x = (): string | number => 0
// let y = (): string => 'a'
// // y = x
// x = y

// 函数重载
// function merge(arg1: number, arg2: number): number
// function merge(arg1: string, arg2: string): string
// function merge(arg1: any, arg2: any): any {
//     return arg1 + arg2
// }
// // console.log(merge(1, 2).length)
// console.log(merge('1', '2').length)

// function sum(arg1: number, arg2: number): number
// function sum(arg1: any, arg2: any): any {
//     return arg1 + arg2
// }
// let func = merge
// // func = sum  //  TS2322: Type '(arg1: number, arg2: number) => number' is not assignable to type '{ (arg1: number, arg2: number): number; (arg1: string, arg2: string): string; }'.Types of parameters 'arg1' and 'arg1' are incompatible.



// 枚举, 枚举与数字兼容，不同枚举类型不兼容
// enum Status {
//     On,
//     Off
// }

// let stat = Status.On
// stat = 1
// console.log(stat)

// enum Status {
//     On,
//     Off
// }

// enum Animal {
//     Dog,
//     Cat
// }

// let stat = Status.On
// // stat = Animal.Dog


// 类
// class Animal {
//     static age: number
//     constructor(public name: string) {}
// }

// class People {
//     static age: string
//     constructor(public name: string) {}
// }

// class Food {
//     constructor(public name: string){}
// }

// class Food2 {
//     constructor(public name: number){}
// }


// let animal: Animal
// let people: People
// let food: Food
// let food2: Food2
// animal = people
// animal = food // 只检测类的实例成员
// // animal = food2



// class Parent {
//     private name: string
//     constructor() {}
// }

// class Child extends Parent{
//     constructor() {
//         super()
//     }
// }

// class Other {
//     private name: string
//     constructor() {}
// }

// const child: Parent = new Child()
// // const other: Parent = new Other()



// 泛型
// interface Data<T> {}

// let data1: Data<number>
// let data2: Data<string>
// data1 = data2


// interface Data<T> {
//     type: T
// }

// let data1: Data<number>
// let data2: Data<string>
// data1 = data2 // Type 'Data<string>' is not assignable to type 'Data<number>'.Type 'string' is not assignable to type 'number'