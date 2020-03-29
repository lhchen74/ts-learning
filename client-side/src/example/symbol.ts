const s = Symbol()
console.log(s)
const s2 = Symbol()
console.log(s2)

const s3 = 'name'
const info = {
    [s3]: 'babb'
}
console.log(info)

const s4 = Symbol('name')
const info2 = {
    [s4]: 'babb2',
    age: 18,
    sex: 'male'
}
console.log(info2, info2[s4])
for (const key in info2) {
    console.log(key)
}
console.log(Object.keys(info2))
console.log(Object.getOwnPropertyNames(info2))
console.log(JSON.stringify(info2))
console.log(Object.getOwnPropertySymbols(info2))
console.log(Reflect.ownKeys(info2))


// Symbol.for()  Symbol.keyFor()
const s6 = Symbol('babb')
const s7 = Symbol('babb')

const s8 = Symbol.for('babb')
const s9 = Symbol.for('babb')
console.log(Symbol.keyFor(s6)) // undefined
console.log(Symbol.keyFor(s8)) // babb