interface NameInfo {
    firstName: string,
    lastName: string
}

const getFullName = ({ firstName, lastName }: NameInfo): string => {
    return `${firstName} ${lastName}`
}

console.log(getFullName({
    firstName: 'babb',
    lastName: 'chen'
}))


// interface Vegetable {
//     color?: string,
//     type: string
// }

// const getVegetable = ({ color, type }: Vegetable) => {
//     return `a ${color ? (color + ' ') : ''}${type}`
// }
// console.log(getVegetable({
//     type: 'tomato'
// }))
// console.log(getVegetable({
//     type: 'tomato',
//     color: 'red'
// }))


// interface Vegetable {
//     color?: string,
//     type: string,
//     [prop: string]: any
// }

// const getVegetable = ({ color, type }: Vegetable) => {
//     return `a ${color ? (color + ' ') : ''}${type}`
// }
// console.log(getVegetable({
//     type: 'tomato',
//     color: 'red',
//     size: 2
// }))


// interface Vegetable {
//     color?: string,
//     type: string,
// }

// const getVegetable = ({ color, type }: Vegetable) => {
//     return `a ${color ? (color + ' ') : ''}${type}`
// }
// console.log(getVegetable({
//     type: 'tomato',
//     color: 'red',
//     size: 2
// } as Vegetable))


// interface Vegetable {
//     color?: string,
//     type: string,
// }

// const getVegetable = ({ color, type }: Vegetable) => {
//     return `a ${color ? (color + ' ') : ''}${type}`
// }
// const vegetableInfo = {
//     type: 'tomato',
//     color: 'red',
//     size: 2
// }
// console.log(getVegetable(vegetableInfo))


// interface Vegetable {
//     color?: string,
//     readonly type: string,
// }

// const getVegetable = ({ color, type }: Vegetable) => {
//     return `a ${color ? (color + ' ') : ''}${type}`
// }
// const vegetableInfo = {
//     type: 'tomato',
//     color: 'red',
//     size: 2
// }
// console.log(getVegetable(vegetableInfo))


// interface ArrInter {
//     0: number,
//     readonly 1: string
// }
// {
//     let arr: ArrInter = [1, 'a']
//     // arr[1] = 'b'
// }

type AddFunc = (num1: number, num2: number) => number
const add: AddFunc = (n1, n2) => n1 + n2

interface RoleDic {
    [id: number]: string
}

const role1: RoleDic = {
    // 'a': 'admin'
    1: 'admin'
}


interface Vegetable {
    color: string
}

interface Tomato extends Vegetable {
    radius: number
}

interface Carrot extends Vegetable {
    length: number
}

const tomato: Tomato = {
    radius: 1,
    color: 'orange'
}


interface Counter {
    (): void,
    count: number
}

const getCounter = (): Counter => {
    const c = () => { c.count++ }
    c.count = 0
    return c
}

const counter: Counter = getCounter()
counter()
console.log(counter.count)
counter()
console.log(counter.count)