// const getArray = <T>(value: T, times: number = 5): T[] => {
//     return new Array(times).fill(value)
// }

// const res = getArray<string>('abc', 4).map(item => item.length)
// console.log(res)
// const res = getArray<number>(123, 4).map(item => item.length)
// console.log(res)


// const getArray = <T, U>(p1: T, p2: U, times: number): Array<[T, U]> => {
//     return new Array(times).fill([p1, p2])
// }

// getArray(1, 'a', 3).forEach(item => {
//     console.log(item)
// })

// type GetArray = <T>(args: T, times: number) => T[]
// let getArray: GetArray = (args: any, times: number) => {
//     return new Array(times).fill(args)
// }

// interface GetArray {
//     <T>(args: T, times: number): T[]
// }

// interface GetArray<T> {
//     (args: T, times: number): T[]
// }

// interface ValidateWithLength {
//     length: number
// }

// const getArray = <T extends ValidateWithLength>(args: T, times: number): T[] => {
//     return new Array(times).fill(args)
// }

// getArray([1, 2], 3)

// keyof T 索引类型
const getProps = <T, K extends keyof T>(object: T, propName: K) => {
    return object[propName]
}

const objs = {
    a: 'a',
    b: 'b'
}

getProps(objs, 'a')
// getProps(objs, 'c')

