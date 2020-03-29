// 布尔类型
let bool: boolean
bool = true
// bool = 123

// 数值类型
let num: number
// num = 'abc'
num = 0b1111011
num = 0o173
num = 0x7b

// 字符串类型
let str: string
str = 'abc'
str = `${num}`
console.log(str)

// 数组类型
let arr: number[]
arr = [1, 5]
let arr2: Array<number>
arr2 = [1, 5]
let arr3: (string | number)[]
arr3 = [1, '5']

// 元组类型
let tuple: [string, number, boolean]
tuple = ['1', 1, true]

// 枚举类型
enum Roles {
    SUPER_ADMIN,
    ADMIN,
    USER
}
console.log(Roles.SUPER_ADMIN, Roles.ADMIN, Roles.USER)
let role: number = 0
if (role === Roles.SUPER_ADMIN) {
    console.log("the role is super admin")
}
console.log(Roles[0], Roles[1], Roles[2])

// any 类型
// 运行时才知道类型，写代码时不知道类型
let value: any
value = 'abc'
value = 123
value = false
const arr4: any[] = ['abc', 123, false]

// void 类型
const consoleText = (text: string): void => {
    console.log(text)
}
// consoleText(123)
let v: void
v = undefined
// v = null  "strict": true 情况下不成立

// null 和 undefined
let u: undefined
u = undefined
let n: null
n = null
// num = undefined // "strict": true 情况下不成立

// never 类型
// never 任意类型的子类型
const errorFunc = (message: string): never => {
    throw new Error(message)
}
const infiniteFunc = (): never => {
    while (true) { }
}

// object
let obj = {
    name: 'babb'
}
let obj2 = obj
obj2.name = 'babb2'
console.log(obj)
function consoleObject(obj: object): void {
    console.log(obj)
}
consoleObject(obj2)
// consoleObject(123)

// 类型断言
const getLength = (target: string | number): number => {
    if ((<string>target).length || (target as string).length === 0) {
        return (target as string).length
    } else {
        return target.toString().length
    }
}