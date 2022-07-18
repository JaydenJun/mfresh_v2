/***此模块包含一些常用的工具(Utility)方法***/

//对日期进行格式化
export let formatDate = function (num) {
  num = parseInt(num);
  let d = new Date(num);

  let yy = d.getFullYear();
  let mo = d.getMonth() + 1; //JS中的月份：0~11
  mo = mo < 10 ? "0" + mo : mo; //1~9前面补0
  let dd = d.getDate();
  dd = dd < 10 ? "0" + dd : dd;
  let hh = d.getHours();
  hh = hh < 10 ? "0" + hh : hh;
  let mi = d.getMinutes();
  mi = mi < 10 ? "0" + mi : mi;

  //   return `${yy}-${mo}-${dd} ${hh}:${mi}`;
  return `${yy}-${mo}-${dd}`;
};

//生成指定范围内的随机数

//对数字进行货币格式化
