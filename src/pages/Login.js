import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import service from "../service";

export default function Login() {
  //状态变量 —— 邮箱或电话(登录名)
  let [emailOrPhone, setEmailOrPhone] = useState("");
  //状态变量 —— 登录密码
  let [upwd, setUpwd] = useState("");
  //组件对象的引用 —— 邮箱或电话的引用
  let emailOrPhoneRef = useRef();
  //组件对象的引用 —— 登录密码
  let upwdRef = useRef();
  //状态变量 —— 用户名相关的错误提示
  let [unameMsg, setUnameMsg] = useState("");
  let nav = useNavigate()
  //点击“登录”按钮后，执行登录操作
  function doLogin() {
    let n = emailOrPhoneRef.current.value; //登录名
    let p = upwdRef.current.value; //登录密码
    service
      .userLogin(n, p)
      .then((data) => {
        console.log(data);
        if (data.code === 400) {
          setUnameMsg("用户名或密码错误");
        } else if (data.code === 401) {
          setUnameMsg("用户名不能为空");
        } else if (data.code === 1) {
          setUnameMsg("登录成功");
          sessionStorage['uid'] = data.uid
          sessionStorage['userName'] = data.uname
          let p = sessionStorage = ['pathBeforeLogin']
          p = p ? p : '/'
          nav(p)
        } else {
          setUnameMsg("未知的错误");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      {/* header */}
      <div className="header_box">
        <Header></Header>
      </div>
      {/* main */}
      <div className="login_box">
        <div className="container">
          <div className="login">
            <h2>用户登录</h2>
            <dl className="clearfloat">
              <dt>
                <span
                  style={{ display: unameMsg ? "inline" : "none" }}
                  className="tips"
                  id="uname_prompt_text"
                >
                  {unameMsg}
                </span>
                用户名：
              </dt>
              <dd>
                <input
                  defaultValue={emailOrPhone}
                  ref={emailOrPhoneRef}
                  type="text"
                  id="uname"
                  placeholder="邮箱/手机号"
                />
                <em className="icon_user"></em>
                <i className="icon_error" id="uname_prompt_icon"></i>
              </dd>
            </dl>
            <dl>
              <dt>
                <span className="tips" id="pwd_prompt_text">
                  请输入密码
                </span>
                密码：
              </dt>
              <dd>
                <input
                  defaultValue={upwd}
                  ref={upwdRef}
                  type="password"
                  id="pwd"
                  placeholder="密码"
                />
                <em className="icon_pwd"></em>
                <i className="icon_error" id="pwd_prompt_icon"></i>
              </dd>
            </dl>
            <p>
              <label>
                <input type="checkbox" />
                <span>自动登录</span>
              </label>
            </p>
            <button onClick={doLogin} type="button" id="login">
              立 即 登 录
            </button>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer className="footer">
        <Footer></Footer>
      </footer>
    </>
  );
}
