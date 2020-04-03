export interface FunInterface {
    name: string;
    (arg: number): string;
}

export class A {
    constructor() {}
}

class B {
    constructor() {}
}

export { B };
export { B as BB };
// export * from "./b";
export { name as Name } from "./b";
