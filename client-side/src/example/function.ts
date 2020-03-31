{
    // const add = (x: number, y: number) => x + y;
    // let add: (x: number, y: number) => number;
    // add = (x: number, y: number) => x + y;

    // interface Add {
    //     (x: number, y:number): number
    // }
    // type isString = string
    // type Add = (x:number, y:number) => number
    // let add: Add
    // add = (x: number, y:number) => x + y


    // type Add = (x: number, y: number, z?:number) => number
    // let add: Add
    // add = (x: number, y:number) => x + y
    // add = (x: number, y:number, z: number) => x + y + z

    // const add = (x: number, y:number = 0) => x + y

    // const handleData = (first: number, ...args: number[]): number => {
    //     let sum = 0
    //     sum += first
    //     args.forEach(n => sum += n)
    //     return sum
    // }
}


  // TS overload
  function handleData(x: number): number[]
  function handleData(x: string): string[]
  function handleData(x: any): any {
      if (typeof x === "string") {
          return x.split('')
      } else {
          return x.toString().split('').map((item: any) => Number(item))
      }
  }
  console.log(handleData('abc'))
  console.log(handleData(123))
//   handleData('abc').map(item => {
//       return item.toFixed() //  TS2551: Property 'toFixed' does not exist on type 'string'. Did you mean 'fixed'?
//   })