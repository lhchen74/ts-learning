// const merge = <T, U>(arg1: T, arg2: U): T & U => {
//     let res = {} as T & U
//     res = Object.assign(arg1, arg2)
//     return res
// }

// console.log(merge({ a: 'a' }, { b: 'b' }))


// const getLengthFunc = (content: string | number): number => {
//     if (typeof content === 'string') return content.length
//     return content.toString().length
// }

// console.log(getLengthFunc('abc'))

let valueList = ['abc', 123]
const getRandomValue = () => {
    const num = Math.random() * 10
    if (num < 5) { return valueList[0] }
    return valueList[1]
}

const item = getRandomValue()
// if ((item as string).length) {
//     console.log((item as string).length)
// } else {
//     console.log((item as number).toFixed())
// }
// 类型保护
// function isString(value: number | string): value is string {
//     return typeof value === 'string'
// }

// if (isString(item)) {
//     console.log(item.length)
// } else {
//     console.log(item.toFixed())
// }

// typeof item === string/number/boolean/symbol 才会有类型保护效果
if (typeof item === 'string') {
    console.log(item.length)
} else {
    console.log(item.toFixed())
}


// class Class1 {
//     age = 18
//     constructor() { }
// }

// class Class2 {
//     name = 'babb'
//     constructor() { }
// }

// function getRandomItem() {
//     return Math.random() < 0.5 ? new Class1() : new Class2()
// }

// const ritem = getRandomItem()
// // instanceof 类型保护
// if (ritem instanceof Class1) {
//     console.log(ritem.age)
// } else {
//     console.log(ritem.name)
// }


// null/undefined 是任何类型的子类型
// 非严格模式下可以赋值给其他类型
// 严格模式下不可以赋值给其它类型
// let values = '123'
// values = undefined

// 非严格模式下 y 类型为 number
// 严格模式下 y 是 numbe | undefined 的联合类型
// const sumFunc = (x: number, y?: number) => {
//     return x + (y || 0)
// }

// const getLengthFunc = (value: string | null): number {
//     // if (value === null) return 0
//     // return value.length
//     return (value || '').length
// }

// 类型断言
// function getStr(num: number | null): string {
//     function getRes(prefix: string) {
//         return prefix + num?.toFixed().toString()
//     }
//     num = num || 0
//     return getRes('babb-')
// }

// console.log(getStr(1.1))
// console.log(getStr(null))


// 类型别名
// type TypeString = string
// let ts: TypeString

// type Child<T> = {
//     current: T,
//     child: Child<T>
// }

// let c: Child<string> = {
//     current: 'first',
//     child: {
//         current: 'second',
//         child: {
//             current: 'third'
//         } as Child<string>
//     }
// }

// console.log(c)


// interface 和 type 都可以定义类型

// type Alias = {
//     num: number
// }

// interface Interface {
//     num: number
// }

// let alias: Alias = { num: 123 }
// let iface: Interface = { num: 321 }
// alias = iface
// console.log(alias)


// 字面量类型
// type Direction = 'north' | 'east' | 'south' | 'west'
// function getDirection(direction: Direction) {
//     return direction.substr(0, 1).toUpperCase()
// }

// console.log(getDirection('east'))

// type Age = 18
// interface Interface {
//     name: string
//     age: Age
// }

// const _info: Interface = {
//     name: 'babb',
//     age: 18
// }


interface Square {
    kind: 'square'
    size: number
}

interface Rectangle {
    kind: 'rectangle'
    height: number
    width: number
}

interface Circle {
    kind: 'circle'
    radius: number
}

type Shape = Square | Rectangle | Circle
// function getArea(s: Shape): number {
//     switch (s.kind) {
//         case 'square': return s.size * s.size;
//         case "rectangle": return s.height * s.width;
//         case "circle": return Math.PI * s.radius ** 2;
//     }
// }

function assertNever(value: never): never {
    throw new Error('Unexpected value: ' + value)
}
function getArea(s: Shape): number {
    switch (s.kind) {
        case 'square': return s.size * s.size;
        case 'rectangle': return s.height * s.width;
        case 'circle': return Math.PI * s.radius ** 2;
        default: return assertNever(s);
    }
}