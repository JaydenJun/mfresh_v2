/*** 对服务器端的所有数据接口进行二次封装 ***/
let service = {
  //服务器的基础地址
  url: "http://www.codeboy.com:9999/mfresh/",
};

//向购物车中添加商品
service.cartDetailAdd = function (uid, pid) {
  let url = service.url + "data/cart_detail_add.php";
  let options = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `uid=${uid}&pid=${pid}`,
  };
  return fetch(url, options).then((res) => res.json());
};

//根据购物车详情记录编号删除该购买记录
service.cartDetailDelete = function (did) {
  let url = service.url + "data/cart_detail_delete.php?did=" + did;
  return fetch(url).then((res) => res.json());
};

//查询指定用户的购物车内容
service.cartDetailSelect = function (uid) {
  let url = service.url + "data/cart_detail_select.php?uid=" + uid;
  return fetch(url).then((res) => res.json());
};

//根据购物车详情记录编号修改该商品购买数量
service.cartDetailUpdate = function (did, pid, count) {
  let url = service.url + "data/cart_detail_update.php";
  let options = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `did=${did}&pid=${pid}&count=${count}`,
  };
  return fetch(url, options).then((res) => res.json());
};

//根据新闻ID返回新闻详情
service.newsDetail = function (nid) {
  let url = service.url + "data/news_detail.php?nid=" + nid;
  return fetch(url).then((res) => res.json());
};

//根据新闻ID返回新闻详情
service.newsDetail = function (nid) {
  let url = service.url + "data/news_detail.php?nid=" + nid;
  return fetch(url).then((res) => res.json());
};

//按发布时间逆序返回新闻列表
service.newsSelect = function (pageNum) {
  pageNum = pageNum ? pageNum : 1;
  let url = service.url + "data/news_select.php?pageNum=" + pageNum;
  return fetch(url).then((res) => res.json());
};

//根据产品ID返回产品详情
service.productDetail = function (pid) {
  let url = service.url + "data/product_detail.php?pid=" + pid;
  return fetch(url).then((res) => res.json());
};

//分页获取产品信息
service.productSelect = function (pageNum = 1, type = 1) {
  let url = `${service.url}data/product_select.php?pageNum=${pageNum}&type=${type}`;
  return fetch(url).then((res) => res.json());
};

//验证电话号码是否已经存在
service.userCheckPhone = function (phone) {
  let url = service.url + "data/user_check_phone.php?phone=" + phone;
  return fetch(url).then((res) => res.json());
};

//验证用户名是否已经存在
service.userCheckUname = function (uname) {
  let url = service.url + "data/user_check_uname.php?uname=" + uname;
  return fetch(url).then((res) => res.json());
};

//用户登录验证
service.userLogin = function (unameOrPhone, upwd) {
  let url = service.url + "data/user_login.php";
  let options = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `unameOrPhone=${unameOrPhone}&upwd=${upwd}`,
  };
  return fetch(url, options).then((res) => res.json());
};

//注册新用户
service.userRegister = function (uname, upwd, phone) {
  let url = service.url + "data/user_register.php";
  let options = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `uname=${uname}&upwd=${upwd}&phone=${phone}`,
  };
  return fetch(url, options).then((res) => res.json());
};

//导出service对象
export default service;
