// this 类型
// class Counter {
//     constructor(public count: number = 0) { }

//     add(value: number) {
//         this.count += value
//         return this
//     }

//     substract(value: number) {
//         this.count -= value
//         return this
//     }
// }

// let c = new Counter()
// console.log(c.add(10).substract(10))


// class PowCounter extends Counter {
//     constructor(public count: number = 0) {
//         super(count)
//     }

//     pow(value: number) {
//         this.count **= value
//         return this
//     }
// }

// let pc = new PowCounter(3)
// console.log(pc.pow(2).add(2).substract(1))


// 索引类型
// keyof
// interface Info {
//     name: string
//     age: number
// }

// let infoProp: keyof Info
// infoProp = 'name'
// infoProp = 'age'
// // infoProp = 'sex'

// function getValue<T, K extends keyof T>(obj: T, names: K[]) {
//     return names.map(n => obj[n])
// }

// const infoObj = {
//     name: 'babb',
//     age: 18
// }

// // let infoValue = getValue(infoObj, ['name'])
// // console.log(infoValue)

// let infoValue: (string | number)[] = getValue(infoObj, ['name', 'age'])
// console.log(infoValue)

// [] 索引访问操作符

// interface Info {
//     name: string
//     age: number
// }

// type NameType = Info['name']

function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
    return o[name]
}

interface Objs<T> {
    [key: string]: T
}

// let keys: keyof Objs<string>
let keys: Objs<number>['name']

interface Type {
    a: never
    b: string
    c: number
    d: object
    e: undefined
    f: null
}
// keyof Type 严格模式下返回非 never 的属性名
// 非严格模式下返回非 undefined, never, null 的属性名
// Type['a'] 返回属性的类型
type Test = Type[keyof Type]