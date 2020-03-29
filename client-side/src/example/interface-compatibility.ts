{
    let name = "babb"
    // name = 123

    let arr = [1, 'a']
    // arr = [2, 'b', false]

    // ???
    // window.onmousedown = (mouseEvent: any) => {
    //     console.log(mouseEvent)
    // }

    interface Info {
        name: string
    }

    let info: Info
    const info1 = { name: 'babb', age: 18 }
    info = info1 // 会检测 info1 中是否有 name 属性
    console.log(info)

    // 参数个数
    // let x = (a: number) => 0
    // let y = (b: number, c: string) => 0
    // y = x
    // // x = y

    // 参数类型
    // let x = (a: number) => 0
    // let y = (b: string) => 0
    // // x = y


}
