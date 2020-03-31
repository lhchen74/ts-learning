// class Point {
//     x: number
//     y: number

//     constructor(x: number, y:number) {
//         this.x = x
//         this.y = y
//     }

//     getPosition() {
//         return `(${this.x}, ${this.y})`
//     }
// }


// class Parent {
//     name: string
//     constructor (name: string) {
//         this.name = name
//     }

// }

// class Child extends Parent {
//     constructor(name: string) {
//         super(name)
//     }
// }


// class Parent {
//     private age: number
//     constructor(age: number) {
//         this.age = age
//     }
//     protected getAge() {
//         return this.age
//     }
// }


// const p = new Parent(10)
// // console.log(p.age) // Property 'age' is private and only accessible within class 'Parent'.


// class Child extends Parent {
//     constructor(age: number) {
//         super(age)
//         // console.log(super.age) // Only public and protected methods of the base class are accessible via the 'super' keyword.
//         console.log(super.getAge())
//     }
// }


// class UserInfo {
//     readonly name: string
// }


// class A {
//     constructor(name: string) {}
// }

// const a = new  A('babb')
// console.log(a)  // {}

// class A {
//     // 在参数前加上访问修饰符，会将属性添加到实例上
//     constructor(public name: string) {}
// }

// const a = new  A('babb')
// console.log(a)  // {name: "babb"}


// class Parent {
//     private static age: number = 18
//     public static getAge() {
//         return Parent.age
//     }
// }

// console.log(Parent.getAge())


// class Info {
//     public name: string
//     public age?: number
//     private _info: string

//     constructor(name: string, age?: number, public sex?: string) {
//         this.name = name
//         this.age = age
//     }

//     get info() {
//         return this._info
//     }

//     set info(value) {
//         console.log(`setter ${value}`)
//         this._info = value
//     }
// }

// let i = new Info("babb")
// i = new Info("babb", 18)
// i = new Info("babb", 18, "man")
// i.info = 'xxx'
// console.log(i)


// abstract class People {
//     constructor(public name: string){}

//     public abstract print(): void
// }

// class Man extends People {

//     constructor(name: string) {
//         super(name)
//     }

//     public print(): void {
//         console.log(this.name)
//     }
// }

// const m = new Man('babb')
// m.print()



// interface FoodInterface {
//     type: string
// }

// class FoodClass implements FoodInterface {
//     type: string
// }


// class A {
//     protected name: string
// }

// // tslint:disable-next-line:no-empty-interface
// interface I extends A {}  // 接口继承类只会继承属性，不会继承方法


// // class B implements I {
// //     public name: string // Property 'name' is protected but type 'B' is not a class derived from 'A'
// // }

// class B extends A implements I {
//     public name: string
// }


const create = <T>(c: new() => T): T  => {
    return new c()
}

class Info {
    public age: number
}
console.log(create<Info>(Info))