//Named Export，命名导出 —— 每个模块可以使用多次
export let age = 30;
//Named Export，命名导出 
export let work = function(){console.log(9999)}


let  config = {
    age: age
}

//Default Export，默认导出 —— 每个模块只能使用一次
export default config