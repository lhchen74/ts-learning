// this type
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

// 索引type
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

// function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
//     return o[name]
// }

// interface Objs<T> {
//     [key: string]: T
// }

// // let keys: keyof Objs<string>
// let keys: Objs<number>['name']

// interface Type {
//     a: never
//     b: string
//     c: number
//     d: object
//     e: undefined
//     f: null
// }
// // keyof Type 严格模式下返回非 never 的属性名
// // 非严格模式下返回非 undefined, never, null 的属性名
// // Type['a'] 返回属性的type
// type Test = Type[keyof Type]

// 映射type  Readonly Partial Pick Record
// interface Info {
//     name: string;
//     age: number;
//     sex: string;
// }

// type ReadonlyType<T> = {
//     readonly [P in keyof T]?: T[P];
// };

// type ReadonlyInfo = ReadonlyType<Info>;
// // // type ReadonlyInfo = Readonly<Info>
// // // type PartialInfo = Partial<Info>

// type RemoveReadonlyPartial<T> = {
//     -readonly [P in keyof T]-?: T[P];
// };

// type NotReadonlyPartial = RemoveReadonlyPartial<ReadonlyInfo>;

// let rinfo: ReadonlyInfo = {
//     name: 'babb',
//     age: 28,
// }

// // rinfo.name = 'babb chen'

// type MyPick<T, K extends keyof T> = {
//     [P in K]: T[P]
// }

// interface InfoType  {
//     name: string
//     age: number
//     sex: string
// }

// // let MyInfoType: MyPick<InfoType, "age" | "name">
// let MyInfoType: Pick<InfoType, "name" | "age">

// interface InfoType {
//     name: string
//     age: number
//     address: string
// }

// const info: InfoType = {
//     name: 'babb',
//     age: 20,
//     address: 'henan'
// }

// function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
//     const res: any = {}
//     keys.map(key => {res[key] = obj[key]})
//     return res
// }

// const nameAndAddr = pick(info, ['name', 'address'])
// console.log(nameAndAddr)

// function mapObject<K extends number, T, U>(obj: Record<K, T>, f: (x: T) => U): Record<K, U> {
//     const res: any = {}

//     for (const key in obj) {
//         res[key] = f(obj[key])
//     }

//     return res
// }

// const names = {'a': 'hello', 1: 'world', 2: 'bye'}
// // K extends number why key can use 'a'  ???
// const lens = mapObject(names, s => s.length)
// console.log(lens)

// type Proxy<T> = {
//     get(): T;
//     set(value: T): void;
// };

// type Proxify<T> = {
//     [P in keyof T]: Proxy<T[P]>;
// };

// function proxify<T>(obj: T): Proxify<T> {
//     const result = {} as Proxify<T>;

//     for (const key in obj) {
//         result[key] = {
//             get: () => obj[key],
//             set: value => (obj[key] = value)
//         };
//     }

//     return result;
// }

// let props = {
//     name: "babb",
//     age: 18
// };

// let proxyProps = proxify(props);
// console.log(proxyProps);

// function unproxify<T>(t: Proxify<T>): T {
//     const result = {} as T;
//     for (const k in t) {
//         result[k] = t[k].get();
//     }
//     return result;
// }

// let originProps = unproxify(proxyProps);
// console.log(originProps);

// type MapToPromise<T> = {
//     [K in keyof T]: Promise<T[K]>;
// };

// type Tuple = [number, string, boolean];
// type PromiseTuple = MapToPromise<Tuple>;

// let tup: PromiseTuple = [
//     Promise.resolve(1),
//     Promise.resolve("a"),
//     Promise.resolve(true)
// ];
// console.log(tup);

// // unknown type
// // 1. any type can assign to unknown type
// let un: unknown;
// un = 1;
// un = "a";

// // 2. if not have type assert or detail base on control flow;
// // unknown only can assign to `unknown` or `any`
// let data = "123";
// // data = un; // Type 'unknown' is not assignable to type 'string'

// // 3. unknown coross with other type, will represent other type
// let us: unknown & string;
// let nu: number & unknown;

// // 4. unknown union with other type(except any), will represent unknown
// let union1: unknown | string;
// let union2: number[] | unknown;
// let union3: any | unknown;

// // 5. never type is subtype of unknown
// type type1 = never extends unknown ? true : false;

// // 6. keyof unknown is equivalent to never
// type type2 = keyof unknown;

// // 7. unknown only can use equal or not equal operation
// console.log(un === data, un !== data);

// // 8. unknown can't use as func, class and can't access it's property
// let Unown: unknown;
// // Unown.age
// // Unown();
// // new Unown();

// //  9. when use mapping type, if tranversal unkown type, will not mapping any properties
// type Types<T> = {
//     [P in keyof T]: number;
// };

// type type3 = Types<any>;
// type type4 = Types<unknown>;

// // condition type

// type Types<T> = T extends string ? string : number;
// let type1: Types<"a">;
// let type2: Types<1>;

// type Types2<T> = T extends any ? T : never;
// let type3: Types2<string | number>;

// type Types3<T> = T extends string
//     ? string
//     : T extends number
//     ? number
//     : T extends boolean
//     ? boolean
//     : T extends undefined
//     ? undefined
//     : T extends Function
//     ? Function
//     : object;
// type type4 = Types3<() => void>;
// type type5 = Types3<string[]>;

// type Diff<T, U> = T extends U ? undefined : T;
// type type6 = Diff<string | number | boolean, undefined | number>;

// type Types4<T> = {
//     [K in keyof T]: T[K] extends Function ? K : never;
// }[keyof T]; // [keyof T] return type not never

// interface Part {
//     id: number;
//     name: string;
//     part(name: string): void;
// }

// type type7 = Types4<Part>;

// // condition type infer
// // T[number] return value type id index is number, equivalent to get arr data's type
// type Types5<T> = T extends any[] ? T[number] : T;
// type type8 = Types5<string[]>;
// type type9 = Types5<string>;

// type Types6<T> = T extends Array<infer U> ? U : T;
// type type10 = Types6<string[]>;
// type type11 = Types5<string>;

// Exclude
type type12 = Exclude<"a" | "b" | "c", "a">;

// Extract
type type13 = Extract<"a" | "b" | "c", "a">;

// NonNullable
type type14 = NonNullable<string | number | null | undefined>;

// ReturnType
type Type15 = ReturnType<() => string>;

// InstanceType
class A {
    constructor() {}
}
console.log(A, typeof A);
type T1 = InstanceType<typeof A>;
type T2 = InstanceType<any>;
type T3 = InstanceType<never>;
